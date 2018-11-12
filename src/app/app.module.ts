import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { GamesPage } from '../pages/games/games';
import { StatsPage } from '../pages/stats/stats';
import { SettingsPage } from '../pages/settings/settings';
import { NewsService } from './services/news.service';

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBdtVNeCmkpZqkKIW35PwRjpqQ6YPD1nJg",
  authDomain: "cursoionic-dd5ad.firebaseapp.com",
  databaseURL: "https://cursoionic-dd5ad.firebaseio.com",
  projectId: "cursoionic-dd5ad",
  storageBucket: "cursoionic-dd5ad.appspot.com",
  messagingSenderId: "810124328266"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    GamesPage,
    StatsPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    GamesPage,
    StatsPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsService
  ]
})
export class AppModule {}
