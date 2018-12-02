import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

@Injectable()
export class NewsService{
    constructor (public afDB: AngularFireDatabase){

    }

    public getNews(){
        return this.afDB.list('/news/');
    }
    
    public getSpecificNews(id){
        return this.afDB.list('/news/' + id);
    }

}