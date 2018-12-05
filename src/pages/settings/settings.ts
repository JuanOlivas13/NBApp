import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChooseTeamPage } from '../choose-team/choose-team';
import { AuthenticationService } from '../../services/auth.service';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService:AuthenticationService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  
  goToChooseTeam(){
    this.navCtrl.push(ChooseTeamPage);
  }

  logout(){
    this.authService.logOut().then( ()=>{
      this.navCtrl.setRoot(LoginPage);
    }).catch((error)=>{
      console.log(error);
    });
  }

}
