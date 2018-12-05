import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { gamesService } from '../../services/games.service';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/auth.service';

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
  chosenTeams: string[]=[];
  user:User;

  constructor(private userService:UserService, public navCtrl: NavController, public navParams: NavParams, public gamesService:gamesService, private alertCtrl: AlertController, private authService: AuthenticationService) {
    this.gamesService.getTeams().valueChanges()
    .subscribe((teamsFB)=>{
      this.teams = teamsFB;
    })
    this.authService.getStatus().subscribe((data)=>{
      this.userService.getById(data.uid).valueChanges().subscribe((user: any)=>{
        this.user = user;
      }, (error)=>{
        console.log(error);
      }
    )}, (error)=>{
      console.log(error);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseTeamPage');
  }

  choseTeam(team){
    let index = this.chosenTeams.indexOf(team.tid);
    if(index > -1){
      this.chosenTeams.splice(index, 1);
    }
    else{
      this.chosenTeams.push(team.tid);
    }
    console.log(this.chosenTeams);
  }

  updateTeams(){
    if(this.chosenTeams.length == 0){
      let alert = this.alertCtrl.create({
        title: 'Ops',
        subTitle: 'Al parecer no has seleccionado ningún equipo',
        buttons: ['OK']
      });
      alert.present();
      return;
    }
    this.userService.updateTeams(this.chosenTeams,this.user.uid).then(()=>{
      let alert = this.alertCtrl.create({
        title: 'Confirmado',
        subTitle: 'Equipos guardados con éxito',
        buttons: ['OK']
      });
      alert.present();
    }).catch((error)=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: error.message,
        buttons: ['OK']
      });
      alert.present();
      console.log(error);
    });
  }
}
