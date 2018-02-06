import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Route } from '@angular/router/src/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-internship-company',
  templateUrl: './show-internship-company.component.html',
  styleUrls: ['./show-internship-company.component.css']
})
export class ShowInternshipCompanyComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authservice: AuthService, public router: Router) { }

  id: any;
  internship: any;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    let intership = this.authservice.afDB.object('/interships/' + this.id).snapshotChanges()
    intership.forEach(element => {
      this.internship = element
      console.log(this.internship)
    })
  }

}
