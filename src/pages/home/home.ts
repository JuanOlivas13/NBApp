import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsService } from '../../services/news.service';
import { NewPage } from '../new/new';
import { AuthenticationService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  news: any = [];
  segment: string = "following";
  user: User;
  chosenTeams : any = [];
  followingNews: any = [];

  constructor(public navCtrl: NavController, public newsService:NewsService, private authService: AuthenticationService, private userService: UserService) {
    this.newsService.getNews().valueChanges()
      .subscribe((newsFB)=>{
        this.news = newsFB;
      })
      this.authService.getStatus().subscribe((session) => {
        if (!session) {
          return;
        }
        if (!session.uid) {
          return;
        }
        userService.getById(session.uid).valueChanges().subscribe((user:User)=>{
          this.user=user;
          this.chosenTeams = this.user.favoriteTeams;
          this.filterTeams();
        })
      });
  }
  goToNew(noticia){
    this.navCtrl.push(NewPage, {noticia:noticia});
  }

  filterTeams(){
    this.news.map((data) => {
        if(this.chosenTeams.includes(data.tid)){
          this.followingNews.push(data);
        }
    })
  }
}
