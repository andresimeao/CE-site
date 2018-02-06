import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { LoginComponent } from '.././login/login.component';
import { error } from 'util';
// import { EventEmitter } from 'selenium-webdriver';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';

import swal from 'sweetalert';

@Injectable()
export class AuthService {

  user: Observable<any>

  status: any;

  private authenticatedUser: boolean = false;

  showMenu = new EventEmitter<boolean>();
  userMenu = new EventEmitter<any>();

  constructor(public afAuth: AngularFireAuth, public afDB: AngularFireDatabase, public router: Router) { }

  getStatusUser(id) {

    this.user = this.afDB.object('/users/' + id).valueChanges()
    this.user.forEach(element => {
      this.status = element.status;
    });

    console.log('status:', this.status);
    return this.status;
  }

  public login(user): void {
    this.afAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(res => {
      return this.afAuth.app.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(response => {
          //let status = this.getStatusUser(response.uid);

          this.authenticatedUser = true;

          this.showMenu.emit(true);

          this.user = this.afDB.object('/users/' + response.uid).valueChanges()



          this.user.forEach(element => {
            this.status = element.status;

            this.userMenu.emit(element);

            switch (this.status) {
              case 1:
                // alert('Usuario logado com sucesso: ' + response.uid);
                this.router.navigate(['/show-interships-central']);
                break;
              case 2:
                // alert('Usuario logado com sucesso: ' + response.uid);
                this.router.navigate(['/home-page-company']);
                break;
              default:
                console.log(status);
            }

          });


        }, error => {

          this.authenticatedUser = false;

          this.showMenu.emit(false);

          switch (error.code) {
            case 'auth/invalid-email':
              swal({
                text: "Endereço de e-mail inválido",
                icon: "error",
              });
              //alert('Endereço de e-mail invalido');
              break;

            case 'auth/user-disabled':
              swal({
                text: "E-mail desativado",
                icon: "error",
              });
              //alert('Email desativado');
              break;

            case 'auth/user-not-found':
              swal({
                text: "Conta de usuário não encontrado",
                icon: "error",
              });
              //alert('Conta de usuario não encontrado');
              break;

            case 'auth/wrong-password':
              swal({
                text: "Endereço de e-mail ou senha inválidos",
                icon: "error",
              });

              //alert('endereço de email ou senha invalidos');
              break;
          }

        });

    }).catch(error => {
      swal({
        title: "Erro!",
        text: "Erro de sessão: " + error,
        icon: "error",
      });
      //alert('Erro de sessão: ' + error);
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
  createEmailAndPassword(user) {

    this.afAuth.app.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(firebaseUser => {

        this.afDB.database.ref('users/' + firebaseUser.uid).set({ company: user.company, name: user.name, email: user.email, status: 2 });

        swal({
          title: "Criado!",
          text: "Conta criada com sucesso!",
          icon: "success",
        });

        //alert('sucesso, id do usuario: ' + firebaseUser.uid);
        this.router.navigate(['/login']);
      }).catch(erro => {
        swal({
          title: "Erro!",
          text: "Não foi possível criar a conta de usuário!",
          icon: "error",
        });
        //alert('error: ' + erro.message);

      });
  }
}
