import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { LoginComponent } from '.././login/login.component';

@Injectable()
export class AuthService {

  constructor(public afAuth:AngularFireAuth, public afDB: AngularFireDatabase, public router: Router) { }

  login(user){

    this.afAuth.app.auth().signInWithEmailAndPassword(user.email, user.password).then(Resp =>{
      alert('Usuario logado com sucesso: ' + Resp);
      console.log(Resp);
    }).catch(erro =>{
      alert('Erro: ' + erro.message);
    })
     
  }
  createEmailAndPassword(user){

    this.afAuth.app.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(firebaseUser =>{

      this.afDB.database.ref('users/'+ firebaseUser.uid).set({company:user.company, name:user.name, email:user.email, status:2});
      
     alert('sucesso, id do usuario: '+ firebaseUser.uid);
      this.router.navigate(['/login']);
    }).catch(erro =>{
      
    alert('error: ' + erro.message);
     
    });
  }
}
