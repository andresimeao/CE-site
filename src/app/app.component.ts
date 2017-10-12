import { Component } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: Observable<any[]>;
  teste: any;
        constructor(public afDB: AngularFireDatabase, public db: AngularFirestore) {
       this.teste = this.afDB.list('/users').snapshotChanges();
        //  this.items = db.collection('users').valueChanges();
        console.log(this.teste.name);
         
        }

}
