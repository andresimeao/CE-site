import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IntershipService {
  //interships:AngularFireList<any>;
  items:any;
  teste:any[];
  constructor(public afDB: AngularFireDatabase, private router: Router) { }

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
      this.router.navigate(['/home-page-company']);
    },(error) =>{
      alert(error);
    })
  }
  
  // getIntershipsCentral(){
    
  //   this.items = this.afDB.database.ref('/interships/').orderByKey()
  //   .once('value').then(res =>{
    
  //     res.forEach(element => {
  //       //console.log(element.key);
  //       this.teste = element.key;
  //     });
  //   })
 

  
  //  console.log(this.teste);
  //   return this.items;
  // }

}
