import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsService } from '../../services/news.service';
import { NewPage } from '../new/new';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  news: any = [];
  segment: string = "following";

  constructor(public navCtrl: NavController, public newsService:NewsService) {
    this.newsService.getNews().valueChanges()
      .subscribe((newsFB)=>{
        this.news = newsFB;
      })
  }
  goToNew(noticia){
    this.navCtrl.push(NewPage, {noticia:noticia});
  }
}
