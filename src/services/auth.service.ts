import { Injectable } from "@angular/core";
import {AngularFireDatabase} from "@angular/fire/database";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable()
export class AuthenticationService{

    constructor(private angularFireAuth: AngularFireAuth){ }
    loginWithEmail(email: string, password: string){
        return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    }

    registerWithEmail(email: string, password: string){
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    getStatus(){
        return this.angularFireAuth.authState;
    }

    logOut(){
        return this.angularFireAuth.auth.signOut();
    }
}