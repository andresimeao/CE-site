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
  schedule:any = {phone:'', email:'', whoCaringForEmail:'' };
  constructor(private formbuilder: FormBuilder, public authService: AuthService,
     public intershipService:IntershipService) { 
     this.AuthService = authService;
     this.user = this.authService.afAuth.auth.currentUser;
    
  }

  ngOnInit() {

    this.addIntershipForm = this.formbuilder.group({
      internshipVacancy:[null, Validators.required],
      periodMorning:[false],
      periodAfternoon:[false],
      periodNight:[false],
      remuneration:[false, Validators.required],
      valueOfRemuneration:[null, Validators.required ],
      benefit:[null],
      benefitTransport:[null],
      benefitMeal:[null],
      othersBenefit:[null],
      technicalKnowledge:[null, Validators.required],
      personalProfile:[null, Validators.required],
      preference:[null, Validators.required],
      schedule:[false],
      whoTalkSchedule:[null],
      phone:[null],
      email:[null],
      whoCaringForEmail:[null],
      nameOfCompany:[null, Validators.required],
      observations:[null],
      userId:[this.user.uid]
    });

    
  

  }
  
  createIntership(schedule):void{
    console.log(schedule);
    if(this.addIntershipForm.value.periodMorning === false && this.addIntershipForm.value.periodAfternoon === false && this.addIntershipForm.value.periodNight === false){
      alert('Por favor insira um periodo !');
    }else if (this.addIntershipForm.value.benefitTransport === null && this.addIntershipForm.value.benefitMeal === null && this.addIntershipForm.value.benefit === null) {
        alert('Por favor insira um beneficio !');
      }else{
        this.intershipService.createIntership(this.addIntershipForm.value);
        this.addIntershipForm.reset();
      }
    }   
  }


