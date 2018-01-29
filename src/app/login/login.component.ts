import { Component, OnInit } from '@angular/core';

import { AuthService } from '.././services/auth.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any={email:null, password:null };
  


  constructor(public auth:AuthService, public formbuilder: FormBuilder) {
   
   }
   
  ngOnInit() {

   

  }
  login(){
    
    this.auth.login(this.user);
    
  }
}

