import { Component } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items:Observable<any[]>;
  
        constructor(public afDB: AngularFireDatabase, public db: AngularFirestore) {

       
        }

}
