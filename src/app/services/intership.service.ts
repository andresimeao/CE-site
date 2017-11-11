import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Injectable()
export class IntershipService {

  constructor(public afDB: AngularFireDatabase, public router: Router) { }

  createIntership(i){
    this.afDB.database.ref('/interships/').push({
      internshipVacancy:i.internshipVacancy,
      periodMorning:i.periodMorning,
      periodAfternoon:i.periodAfternoon,
      periodNight:i.periodNight,
      remuneration:i.remuneration,
      valueOfRemuneration:i.valueOfRemuneration,
      //benefit:i.benefit,
      benefitTransport:i.benefitTransport,
      benefitMeal:i.benefitMeal,
      othersBenefit:i.othersBenefit,
      technicalKnowledge:i.technicalKnowledge,
      personalProfile:i.personalProfile,
      preference:i.preference,
      schedule:i.schedule,
      whoTalkSchedule:i.whoTalkSchedule,
      phone:i.phone,
      email:i.email,
      whoCaringForEmail:i.whoCaringForEmail,
      nameOfCompany:i.nameOfCompany,
      observations:i.observations,
      userId:i.userId
    }).then((resp) =>{
      alert('Enviado com sucesso');

    },(error) =>{
      alert(error);
    })
  }
  
}
