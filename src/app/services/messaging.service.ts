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

    sendMessageAds(){
      const headers = new Headers({
          'Content-Type':  'application/json',
          'Authorization': 'key=AAAA5sm2SCs:APA91bFImIKn5-3qzsudhAaunxU1lWBqdQJG3Av7P7lp7m-T7A0F3Y4ptYotr2c8LzycwQ-UVCZYy3XIiNPmo16y-K9tqe5cMkbkCwKQ8FD2xlu9_H7HGM70aHUQ6QNpVMVPyMFv5e14'
        });

      let options = new RequestOptions({headers:headers})
      
      
      let body = {
        "notification":{
          "title":"Novo estágio adicionado ",
          "body":"Clique aqui para exibilo",
          "sound":"default",
          "click_action":"FCM_PLUGIN_ACTIVITY",
          "icon":"./assets/images/logoFatec.png"
        },
        "data":{
          "param1":"value1",
          "param2":"value2"
        },
          "to":"/topics/ads",
          "priority":"high",
          "restricted_package_name":""
      }
      return this.http.post('https://fcm.googleapis.com/fcm/send', body, options).subscribe(res =>{
        console.log(res);
      })
       
    }
    sendMessageAgro(){
      const headers = new Headers({
          'Content-Type':  'application/json',
          'Authorization': 'key=AAAA5sm2SCs:APA91bFImIKn5-3qzsudhAaunxU1lWBqdQJG3Av7P7lp7m-T7A0F3Y4ptYotr2c8LzycwQ-UVCZYy3XIiNPmo16y-K9tqe5cMkbkCwKQ8FD2xlu9_H7HGM70aHUQ6QNpVMVPyMFv5e14'
        });

      let options = new RequestOptions({headers:headers})
      
      
      let body = {
        "notification":{
          "title":"Novo estágio adicionado ",
          "body":"Clique aqui para exibi-lo",
          "sound":"default",
          "click_action":"FCM_PLUGIN_ACTIVITY",
          "icon":"./assets/images/logoFatec.png"
        },
        "data":{
          "param1":"value1",
          "param2":"value2"
        },
          "to":"/topics/agro",
          "priority":"high",
          "restricted_package_name":""
      }
      return this.http.post('https://fcm.googleapis.com/fcm/send', body, options).subscribe(res =>{
        console.log(res);
      })
       
    }
    sendMessageInfo(){
      const headers = new Headers({
          'Content-Type':  'application/json',
          'Authorization': 'key=AAAA5sm2SCs:APA91bFImIKn5-3qzsudhAaunxU1lWBqdQJG3Av7P7lp7m-T7A0F3Y4ptYotr2c8LzycwQ-UVCZYy3XIiNPmo16y-K9tqe5cMkbkCwKQ8FD2xlu9_H7HGM70aHUQ6QNpVMVPyMFv5e14'
        });

      let options = new RequestOptions({headers:headers})
      
      
      let body = {
        "notification":{
          "title":"Novo estágio adicionado ",
          "body":"Clique aqui para exibi-lo",
          "sound":"default",
          "click_action":"FCM_PLUGIN_ACTIVITY",
          "icon":"./assets/images/logoFatec.png"
        },
        "data":{
          "param1":"value1",
          "param2":"value2"
        },
          "to":"/topics/info",
          "priority":"high",
          "restricted_package_name":""
      }
      return this.http.post('https://fcm.googleapis.com/fcm/send', body, options).subscribe(res =>{
        console.log(res);
      })
       
    }
    sendMessageAll(){
      const headers = new Headers({
          'Content-Type':  'application/json',
          'Authorization': 'key=AAAA5sm2SCs:APA91bFImIKn5-3qzsudhAaunxU1lWBqdQJG3Av7P7lp7m-T7A0F3Y4ptYotr2c8LzycwQ-UVCZYy3XIiNPmo16y-K9tqe5cMkbkCwKQ8FD2xlu9_H7HGM70aHUQ6QNpVMVPyMFv5e14'
        });

      let options = new RequestOptions({headers:headers})
      
      
      let body = {
        "notification":{
          "title":"Novo estágio adicionado ",
          "body":"Clique aqui para exibi-lo",
          "sound":"default",
          "click_action":"FCM_PLUGIN_ACTIVITY",
          "icon":"./assets/images/logoFatec.png"
        },
        "data":{
          "param1":"value1",
          "param2":"value2"
        },
          "to":"/topics/all",
          "priority":"high",
          "restricted_package_name":""
      }
      return this.http.post('https://fcm.googleapis.com/fcm/send', body, options).subscribe(res =>{
        console.log(res);
      })
       
    }
}