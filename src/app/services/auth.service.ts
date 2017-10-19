import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { LoginComponent } from '.././login/login.component';

@Injectable()
export class AuthService {
firebaseUser:any;
erro:any;
  constructor(public afAuth:AngularFireAuth, public afDB: AngularFireDatabase, public router: Router) { }

  login(){
     
  }
  createEmailAndPassword(user){

    this.afAuth.app.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(firebaseUser =>{

      this.afDB.database.ref('users/'+ firebaseUser.uid).set({company:user.company, name:user.name, email:user.email, status:2});
      
     this.firebaseUser = firebaseUser;
     alert('sucesso, id do usuario: '+ firebaseUser.uid);
      this.router.navigate(['/login']);
    }).catch(erro =>{
      
    alert('error: ' + erro.message);
     
    })
    return this.firebaseUser, this.erro;
  }
}
