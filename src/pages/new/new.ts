import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {
  noticia: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.noticia = navParams.get('noticia');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage');
  }

}
