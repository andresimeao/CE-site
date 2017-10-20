import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { LoginComponent } from '.././login/login.component';

@Injectable()
export class AuthService {
  status:any;
  constructor(public afAuth:AngularFireAuth, public afDB: AngularFireDatabase, public router: Router) { }

getUser(id){

 let user = this.afDB.database.ref('/users/' + id)
 
  user.on('value', snapshot =>{
    
    this.status = snapshot.val().status;
    
    
  });

return this.status;

}

  login(user){

    this.afAuth.app.auth().signInWithEmailAndPassword(user.email, user.password).then(Resp =>{
      alert('Usuario logado com sucesso: ' + Resp.uid);
     let status =  this.getUser(Resp.uid);
     
      if(this.status == 2){
        alert('usuario de empresa');
      }
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
