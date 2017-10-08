import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyBGX7tkIPvSGy_nXcbzOSj2WU2dB0M2TzU',
  authDomain: 'reactive-calendar-a4e2d.firebaseapp.com',
  databaseURL: 'https://reactive-calendar-a4e2d.firebaseio.com',
  projectId: 'reactive-calendar-a4e2d',
  storageBucket: 'reactive-calendar-a4e2d.appspot.com',
  messagingSenderId: '147713892275'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
