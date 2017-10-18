import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(public afAuth:AngularFireAuth, public afDB: AngularFireDatabase) { }

  login(){
     
  }
  createEmailAndPassword(user){

    this.afAuth.app.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(firebaseUser =>{
      this.afDB.database.ref('users/'+ firebaseUser.uid).set({company:user.company, name:user.name, email:user.email});
      return firebaseUser;
    }).catch(erro =>{
      return erro;
    })

  }
}
