import { Component, OnInit } from '@angular/core';
import { IntershipService } from '../services/intership.service';
import { AngularFireList, AngularFireAction, DatabaseSnapshot } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-show-interships-central',
  templateUrl: './show-interships-central.component.html',
  styleUrls: ['./show-interships-central.component.css']
})
export class ShowIntershipsCentralComponent implements OnInit {
  
  constructor(public intershipService: IntershipService) { }
  //interships:Observable<AngularFireAction<DatabaseSnapshot>[]>;
  interships: Observable<any[]>;
  //interships:any[];
  //interships:any;
  teste:Observable<any>;
  nameCompany:any;
  array:any;
  ngOnInit() {

    this.interships = this.intershipService.afDB.list('/interships').snapshotChanges() 
    this.interships.forEach(array => {
      console.log('Array: ',array);
      this.array = array;
    });
  }

  
}
