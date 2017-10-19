import { Component, OnInit } from '@angular/core';

import { AuthService } from '.././services/auth.service';

import {FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  addUserForm: FormGroup;
  AuthService: AuthService;
  user: any;
  constructor(private formbuilder: FormBuilder, authService: AuthService) {
    this.AuthService = authService;
  }

  ngOnInit() {

    this.addUserForm = this.formbuilder.group({
      company:[null, Validators.required],
      name:[null, Validators.required],
      email:[null, [Validators.required, Validators.email]],
      password:[null, [Validators.required, Validators.minLength(6)]],
      password2:[null, [Validators.required, Validators.minLength(6)]]
    });

  }

  createUser(){
   this.AuthService.createEmailAndPassword(this.addUserForm.value)
   this.addUserForm.reset();
    

  }

  checkFieldValidAndTouched(field){
    return !this.addUserForm.get(field).errors && this.addUserForm.get(field).touched;
  }

  toApplyCssErro(field){
    return{ 
      
      'has-error': this.checkFieldValidAndTouched(field),
      'has-feedback': this.checkFieldValidAndTouched(field)
      
    }
  }
}
