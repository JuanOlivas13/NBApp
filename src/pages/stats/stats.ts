import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { gamesService } from '../../services/games.service';


/**
 * Generated class for the StatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {
  teams: any = [];
  segment: string = "teams";

  constructor(public navCtrl: NavController, public navParams: NavParams, public gamesService: gamesService) {
    this.gamesService.getTeams().valueChanges()
    .subscribe((teamsFB)=>{
      this.teams = teamsFB;
      this.teams = this.teams.sort((a, b) =>{
        return b.gamesWon - a.gamesWon;
      });
    })
  }
  avg : any  = function avg(gamesPlayes, gamesWon) {
    return (gamesWon/gamesPlayes).toString().substring(0,5);
  } 
  lose : any  = function lose(gamesPlayed, gamesWon) {
    return (gamesPlayed - gamesWon);
  } 
  ionViewDidLoad() {
    console.log('ionViewDidLoad StatsPage');
  }

}
