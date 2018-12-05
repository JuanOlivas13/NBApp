import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import {AngularFireDatabase} from "@angular/fire/database";

@Injectable()
export class UserService {
  constructor(private angularFireDataBase: AngularFireDatabase) {
  }
  get() {
    return this.angularFireDataBase.list('users/');
  }
  add(user: User) {
    return this.angularFireDataBase.object('/users/' + user.uid).set(user);
  }
  getById(id) {
    return this.angularFireDataBase.object('users/' + id);
  }
  edit(user: User) {
    return this.angularFireDataBase.object('/users/' + user.uid).set(user);
  }

  updateTeams(teams, id){
    return this.angularFireDataBase.object('/users/' + id + '/favoriteTeams').set(teams);
  }
}
