import { Component, OnInit } from '@angular/core';

import {FormGroup, FormBuilder, Validators} from '@angular/forms'

import { AuthService } from '../services/auth.service';
import { IntershipService } from '../services/intership.service';


@Component({
  selector: 'app-create-internship',
  templateUrl: './create-internship.component.html',
  styleUrls: ['./create-internship.component.css']
})
export class CreateInternshipComponent implements OnInit {

  addIntershipForm: FormGroup;
  AuthService: AuthService;
  user:any;

  constructor(private formbuilder: FormBuilder, public authService: AuthService,
     public intershipService:IntershipService) { 
     this.AuthService = authService;
     this.user = this.authService.afAuth.auth.currentUser;
    
  }

  ngOnInit() {

    this.addIntershipForm = this.formbuilder.group({
      internshipVacancy:[null, Validators.required],
      periodMorning:[false, Validators.required],
      periodAfternoon:[false, Validators.required],
      periodNight:[false, Validators.required],
      remuneration:[false, [Validators.required]],
      valueOfRemuneration:[null, [Validators.required]],
      benefit:[null, [Validators.required]],
      benefitTransport:[null, [Validators.required]],
      benefitMeal:[null, [Validators.required]],
      othersBenefit:[null, [Validators.required, Validators.minLength(6)]],
      technicalKnowledge:[null, [Validators.required, Validators.minLength(6)]],
      personalProfile:[null, [Validators.required, Validators.minLength(6)]],
      preference:[null, [Validators.required, Validators.minLength(6)]],
      schedule:[null, [Validators.required]],
      whoTalkSchedule:[null, [Validators.required, Validators.minLength(6)]],
      phone:[null, [Validators.required, Validators.minLength(10)]],
      email:[null, [Validators.required, Validators.minLength(10)]],
      whoCaringForEmail:[null, [Validators.required, Validators.minLength(10)]],
      nameOfCompany:[null, [Validators.required]],
      observations:[null],
      userId:[this.user.uid]
    });

  

  }
  
  createIntership(){
    this.intershipService.createIntership(this.addIntershipForm.value);
    this.addIntershipForm.reset();
  }


}
