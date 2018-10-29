import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  segment: string = "following";

  constructor(public navCtrl: NavController) {
    console.log("hola test");
  }

}
