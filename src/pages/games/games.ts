import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { gamesService } from '../../services/games.service';

/**
 * Generated class for the GamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-games',
  templateUrl: 'games.html',
})
export class GamesPage {
  games:any;
  objectGame:any;
  section: string = "following";

  constructor(public navCtrl: NavController, public navParams: NavParams, public gamesService: gamesService) {
    this.games = gamesService.getGames().valueChanges()
    .subscribe((gameFB)=>{
      this.games = gameFB;
      console.log(this.games);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamesPage');
  }

}
