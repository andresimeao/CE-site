import { Component, OnInit } from '@angular/core';

import { AuthService } from '.././services/auth.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserForm: FormGroup;


  constructor(public auth:AuthService, public formbuilder: FormBuilder) {
   
   }

  ngOnInit() {

    this.loginUserForm = this.formbuilder.group({
      email:[null, [Validators.email, Validators.required]],
      password:[null,[Validators.required]]
    })

  }
  login(){
    
    this.auth.login(this.loginUserForm.value)
    
  }
}

