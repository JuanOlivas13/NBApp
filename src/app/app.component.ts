import { Component } from '@angular/core';
import { Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { timer } from 'rxjs/observable/timer';
import { LoginPage } from '../pages/login/login';
import { AuthenticationService } from '../services/auth.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  showSplash = true;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private authService:AuthenticationService) {
    this.authService.getStatus().subscribe((session) => {
      if (!session) {
        this.rootPage = LoginPage;
        return;
      }
      if (!session.uid) {
        this.rootPage = LoginPage;
        return;
      }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleLightContent();
      splashScreen.hide();

      timer(3000).subscribe(() => this.showSplash = false)
    });
  }
}

