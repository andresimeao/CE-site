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
     this.user = this.authService.afAuth.auth.currentUser;
     this.id = this.user.uid;
     
    
  }
 internship:any = {
  internshipVacancy:'',
  periodMorning:false,
  periodAfternoon:false,
  periodNight:false,
  remuneration:false,
  valueOfRemuneration:'',
  benefit:'',
  benefitTransport:'',
  benefitMeal:'',
  othersBenefit:'',
  technicalKnowledge:'',
  personalProfile:'',
  preference:'',
  schedule:false,
  whoTalkSchedule:'',
  phone:'',
  email:'',
  whoCaringForEmail:'',
  nameOfCompany:'',
  observations:'',
  userId:this.id
 }
  ngOnInit() {

  
  }
  
  createIntership(f):void{
    console.log(f);
         this.intershipService.createIntership(f.value);
    // if(this.addIntershipForm.value.periodMorning === false && this.addIntershipForm.value.periodAfternoon === false && this.addIntershipForm.value.periodNight === false){
    //   alert('Por favor insira um periodo !');
    // }else if (this.addIntershipForm.value.benefitTransport === null && this.addIntershipForm.value.benefitMeal === null && this.addIntershipForm.value.benefit === null) {
    //     alert('Por favor insira um beneficio !');
    //   }else{
    //     this.intershipService.createIntership(f);
    //     this.addIntershipForm.reset();
    //   }
    }   
  }


