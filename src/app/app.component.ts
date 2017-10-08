import { Component } from '@angular/core';
import {AngularFirestoreCollection, AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';

export interface Item { date: string }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  itemCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(private afs: AngularFirestore) {
    this.itemCollection = this.afs.collection<Item>('reservations', ref => {
       return ref.where('date', '==', '2');
    });
    this.items = this.itemCollection.valueChanges();
  }
}
