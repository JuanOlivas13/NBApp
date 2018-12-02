import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { gamesService } from '../../services/games.service';

/**
 * Generated class for the ChooseTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choose-team',
  templateUrl: 'choose-team.html',
})
export class ChooseTeamPage {
  teams:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public gamesService:gamesService) {
    this.gamesService.getTeams().valueChanges()
    .subscribe((teamsFB)=>{
      this.teams = teamsFB;
      console.log(this.teams);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseTeamPage');
  }

}
