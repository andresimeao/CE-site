import { Component, OnInit } from '@angular/core';
import { IntershipService } from '../services/intership.service';
import { AngularFireList, AngularFireAction, DatabaseSnapshot } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { forEach } from '@angular/router/src/utils/collection';
import { MessagingService } from '../services/messaging.service';

@Component({
  selector: 'app-show-interships-central',
  templateUrl: './show-interships-central.component.html',
  styleUrls: ['./show-interships-central.component.css']
})
export class ShowIntershipsCentralComponent implements OnInit {
  menssage:any;
  constructor(public intershipService: IntershipService,public messaging:MessagingService) {
          this.messaging.getPermission();
          this.messaging.receiveMessage();
          this.menssage = this.messaging.currentMessage;
   }
  //interships:Observable<AngularFireAction<DatabaseSnapshot>[]>;
  interships:any;
  //interships:any[];
  //interships:any;
  teste:Observable<any>;
  nameCompany:any;
  array:any;
  ngOnInit() {

    this.interships = this.intershipService.afDB.list('/interships', ref => ref.orderByChild('status').equalTo(0)).snapshotChanges()
    // console.log(this.interships)
    this.interships.forEach(array => {
      // console.log('Array: ',array);
      this.array = array;
    });
  }

  
}
