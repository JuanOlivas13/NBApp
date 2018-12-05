import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { AuthenticationService } from '../../services/auth.service';
import { User } from '../../interfaces/user'
import { UserService } from '../../services/user.service';
import { ChooseTeamPage } from '../choose-team/choose-team';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  password: string;
  password2: string;
  email: string;
  operation: string = 'login';

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthenticationService, private userService: UserService, private toastCtrl: ToastController,private alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  registerWithEmail() {
    if(this.password !== this.password2) {
      let toast = this.toastCtrl.create({
        message: 'Las contraseñas no coinciden',
        duration: 3000,
        position: 'top'
      });
      toast.present();
      return;
    }
    this.authService.registerWithEmail(this.email, this.password).then((data) => {
      const user: User = {
        email: this.email,
        uid: data.user.uid,
      };
      this.userService.add(user).then(() => {
        let toast = this.toastCtrl.create({
          message: 'Usuario registrado con éxito',
          duration: 3000,
          position: 'top'
        });
        toast.present();
        this.operation = 'login';
      }).catch((error) => {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: error.message,
          buttons: ['OK']
        });
        alert.present();
        console.log(error);
      });
    }).catch((error) => {
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: error.message,
        buttons: ['OK']
      });
      alert.present();
      console.log(error);
    });
  }

  loginWithEmail() {
    this.authService.loginWithEmail(this.email, this.password).then(() => {
      let toast = this.toastCtrl.create({
        message: 'Bienvenido',
        duration: 3000,
        position: 'top'
      });
      toast.present();
      this.navCtrl.setRoot(TabsPage);
    }).catch((error) => {
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: error.message,
        buttons: ['OK']
      });
      alert.present();
    })
  }

}
