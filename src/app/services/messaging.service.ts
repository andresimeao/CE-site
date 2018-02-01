import { Injectable }          from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth }     from 'angularfire2/auth';
import * as firebase from 'firebase';
import 'rxjs/add/operator/take';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
@Injectable()
export class MessagingService {
  messaging = firebase.messaging()
  currentMessage = new BehaviorSubject(null)
  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, private http:Http) { }
  updateToken(token) {
  
    //implementar código para salvar token da mensagem no usuário
  }
  getPermission() {
      this.messaging.requestPermission()
      .then(() => {
        console.log('Notification permission granted.');
        return this.messaging.getToken()
      })
      .then(token => {
        console.log(token)
        //this.updateToken(token)
      })
      .catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });
    }
    receiveMessage() {
       this.messaging.onMessage((payload) => {
        console.log("Message received. ", payload);
        this.currentMessage.next(payload)
      });
    }

    sendMessage(){
      const headers = new Headers({
          'Content-Type':  'application/json',
          'Authorization': 'key=AAAA5sm2SCs:APA91bFImIKn5-3qzsudhAaunxU1lWBqdQJG3Av7P7lp7m-T7A0F3Y4ptYotr2c8LzycwQ-UVCZYy3XIiNPmo16y-K9tqe5cMkbkCwKQ8FD2xlu9_H7HGM70aHUQ6QNpVMVPyMFv5e14'
        });

      let options = new RequestOptions({headers:headers})
      
      
      let body = {
        "to" : "fT6PvQ71R4E:APA91bESv9GUTZ2WbwcnakG26e07e5bvULNcZrh5YQSV3PDAk1ZQyCXmYtrixDTg9XwfODjGGe-OsQKR4ahlhYVsOQ2M0Je0uWP7hVPQao89dQfjSwa1WJWtZods2ZBoLfTsshShJruj",
        "notification" : {
        "title" : "Mensagem para o Firebase",
        "body" : "Teste firebase"
        }, 
        "data" : {
        "nome" : "Ricardo",
        "sobrenome" : "Lecheta"
        }
       }
      return this.http.post('https://fcm.googleapis.com/fcm/send', body, options).subscribe(res =>{
        
      })
       
    }
}