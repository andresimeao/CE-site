import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { IntershipService } from '../services/intership.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-create-internship-central',
  templateUrl: './create-internship-central.component.html',
  styleUrls: ['./create-internship-central.component.css']
})
export class CreateInternshipCentralComponent implements OnInit {

  AuthService: AuthService;
  user: any;
  company: any;
  id: any;

  schedule: any = { phone: '', email: '', whoCaringForEmail: '' };

  constructor(public authService: AuthService, public intershipService: IntershipService) {
    this.AuthService = authService;
  }

  internship: any = {
    internshipVacancy: null,
    periodMorning: false,
    periodAfternoon: false,
    periodNight: false,
    remuneration: false,
    valueOfRemuneration: null,
    benefit: false,
    benefitTransport: false,
    benefitMeal: false,
    othersBenefit: null,
    technicalKnowledge: null,
    personalProfile: null,
    preference: null,
    schedule: true,
    whoTalkSchedule: null,
    phone: null,
    email: null,
    whoCaringForEmail: null,
    nameOfCompany: false,
    stringNameOfCompany: false,
    observations: null,
    userId: this.id
  }


  ngOnInit() {
  
    this.user = this.authService.afAuth.auth.currentUser;
    this.id = this.user.uid;

  }

  createIntership(): void {
    this.internship.userId = this.id;

    if (this.internship.periodMorning === false && this.internship.periodAfternoon === false && this.internship.periodNight === false) {

      swal({
        icon: 'error',
        text: 'Por favor insira um período!',
      })
      //alert('Por favor insira um periodo !');
    } else if (this.internship.benefitTransport == false && this.internship.benefitMeal == false && this.internship.benefit == false) {
      swal({
        icon: 'error',
        text: 'Por favor insira um benefício!',
      })

      //alert('Por favor insira um beneficio !');
    } else {
      let statusUser = 1;
      this.intershipService.createIntership(this.internship, statusUser);
      //  this.internship.reset();
    }
  }

}
