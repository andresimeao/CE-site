import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'


@Component({
  selector: 'app-intership-detail',
  templateUrl: './intership-detail.component.html',
  styleUrls: ['./intership-detail.component.css']
})
export class IntershipDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authservice:AuthService,
    private formbuilder: FormBuilder) { }

id:any;
intership:any;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    let intership = this.authservice.afDB.object('/interships/' +this.id).snapshotChanges()
    intership.forEach(element => {
      this.intership = element
      console.log('elemente: ', element);
      console.log('intership: ', this.intership);
    })
    
  }
  
}
