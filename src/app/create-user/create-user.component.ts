import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  addUserForm:FormGroup;

  constructor(public formBuilder: FormBuilder) {

    this.addUserForm = this.formBuilder.group({
      empresaName:['', Validators.compose([Validators.required])],
      name:['',Validators.compose([Validators.required])],
      email:['',Validators.compose([Validators.required, Validators.email])],
      password:['', Validators.compose([Validators.required, Validators.minLength(6)])],
      
      

    });
  }

  CreateUser(){
    console.log('=D');
  }
  ngOnInit() {
  }

}
