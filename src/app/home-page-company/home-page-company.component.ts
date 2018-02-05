import { Component, OnInit } from '@angular/core';
import { AuthService } from '.././services/auth.service';
import { IntershipService } from '../services/intership.service';
import { AngularFireList, AngularFireAction, DatabaseSnapshot } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-home-page-company',
  templateUrl: './home-page-company.component.html',
  styleUrls: ['./home-page-company.component.css']
})
export class HomePageCompanyComponent implements OnInit {

  constructor(public intershipService: IntershipService, public authService:AuthService) { }
  internships:any;
  array:any;
  user:any;

  ngOnInit() {

    this.user = this.authService.afAuth.auth.currentUser;

    this.internships = this.intershipService.afDB.list('/interships', ref => ref.orderByChild('userId').equalTo(this.user.uid)).snapshotChanges()
    
    this.internships.forEach(array => {
      this.array = array;
    });
  }

}
