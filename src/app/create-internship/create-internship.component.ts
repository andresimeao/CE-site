import { Component, OnInit } from '@angular/core';


import { AuthService } from '../services/auth.service';
import { IntershipService } from '../services/intership.service';


@Component({
  selector: 'app-create-internship',
  templateUrl: './create-internship.component.html',
  styleUrls: ['./create-internship.component.css']
})
export class CreateInternshipComponent implements OnInit {

  AuthService: AuthService;
  user:any;
  id:any;
  schedule:any = {phone:'', email:'', whoCaringForEmail:'' };
  constructor(public authService: AuthService,
     public intershipService:IntershipService) { 
      this.AuthService = authService; 
  }
 internship:any = {
  internshipVacancy:null,
  periodMorning:false,
  periodAfternoon:false,
  periodNight:false,
  remuneration:false,
  valueOfRemuneration:null,
  benefit:false,
  benefitTransport:null,
  benefitMeal:null,
  othersBenefit:null,
  technicalKnowledge:null,
  personalProfile:null,
  preference:null,
  schedule:false,
  whoTalkSchedule:null,
  phone:null,
  email:null,
  whoCaringForEmail:null,
  nameOfCompany:false,
  observations:null,
  userId:this.id
 }
  ngOnInit() {
    
    this.user = this.authService.afAuth.auth.currentUser;
    this.id = this.user.uid;
  
  }
  
  createIntership():void{
    this.internship.userId = this.id;
     if(this.internship.periodMorning === false && this.internship.periodAfternoon === false && this.internship.periodNight === false){
       alert('Por favor insira um periodo !');
     }else if (this.internship.benefitTransport === null && this.internship.benefitMeal === null && this.internship.benefit === null) {
         alert('Por favor insira um beneficio !');
       }else{
         this.intershipService.createIntership(this.internship);
        //  this.internship.reset();
       }
    }   
  }


