import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

@Injectable()
export class gamesService{
    constructor (public afDB: AngularFireDatabase){

    }

    public getGames(){
        return this.afDB.list('/game/');
    }

    public getTeamById(id){
        return this.afDB.list('/team/' + id);
    }

    public getTeams(){
        return this.afDB.list('/team/');
    }
}