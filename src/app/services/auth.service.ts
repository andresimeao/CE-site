import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { LoginComponent } from '.././login/login.component';
import { error } from 'util';

@Injectable()
export class AuthService {
  user:Observable<any>
  status:any;
  constructor(public afAuth:AngularFireAuth, public afDB: AngularFireDatabase, public router: Router) {}

  getStatusUser(id){
    
    this.user = this.afDB.object('/users/' + id).valueChanges()
    this.user.forEach(element => {
      this.status = element.status;
    });
      
      console.log('status:',this.status);
    return this.status;
  }

  public login(user):void{
    this.afAuth.auth.setPersistence( firebase.auth.Auth.Persistence.LOCAL).then( res =>{
     return this.afAuth.app.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(response =>{
        //let status = this.getStatusUser(response.uid);
  
        this.user = this.afDB.object('/users/' + response.uid).valueChanges()
        this.user.forEach(element => {
          this.status = element.status;
        }).then(response=>{
          
        });
  
       switch(this.status){
         case 1:
         
         alert('Usuario logado com sucesso: ' + response.uid);
         this.router.navigate(['/show-interships-central']);
         break;
         case 2: 
         alert('Usuario logado com sucesso: ' + response.uid);
         this.router.navigate(['/home-page-company']);
         break;
         default:
         console.log(status);
       }
  
       },error =>{
        switch (error.code) {
              case 'auth/invalid-email': alert('Endereço de e-mail invalido');   
                break;
      
              case 'auth/user-disabled' : alert('Email desativado');
              break;
      
              case 'auth/user-not-found': alert('Conta de usuario não encontrado');
              break;
      
              case 'auth/wrong-password': alert('endereço de email ou senha invalidos');
              break;
            }
  
       });

          }).catch(error =>{
            alert('Erro de sessão: ' + error);
          });
    
    // }).catch(erro =>{
    //   switch (erro.code) {
    //     case 'auth/invalid-email': alert('Endereço de e-mail invalido');   
    //       break;

    //     case 'auth/user-disabled' : alert('Email desativado');
    //     break;

    //     case 'auth/user-not-found': alert('Conta de usuario não encontrado');
    //     break;

    //     case 'auth/wrong-password': alert('endereço de email ou senha i
     
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
