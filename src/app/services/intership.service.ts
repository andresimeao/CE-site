import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import swal from 'sweetalert';

@Injectable()
export class IntershipService {
  //interships:AngularFireList<any>;
  items:any;
  teste:any[];

  constructor(public afDB: AngularFireDatabase, private router: Router) { }

  createIntership(i, statusUser){

    this.afDB.database.ref('/interships/').push({
      internshipVacancy:i.internshipVacancy,
      periodMorning:i.periodMorning,
      periodAfternoon:i.periodAfternoon,
      periodNight:i.periodNight,
      remuneration:i.remuneration,
      valueOfRemuneration:i.valueOfRemuneration,
      benefit:i.benefit,
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
      stringNameOfCompany: i.stringNameOfCompany,
      observations:i.observations,
      userId:i.userId,
      status:0,
      program:false,
      semester:false,
      cancellationReason:false,
      date: Date.now()

    }).then((resp) =>{

      swal({
        title: "Criado!",
        text: "A vaga de estágio foi criada com sucesso!",
        icon: "success",
      });

      //alert('Enviado com sucesso');
      if(statusUser == 1){
        this.router.navigate(['/show-interships-central']);
      }else if(statusUser == 2 ){
        this.router.navigate(['/home-page-company']);
      }
      
    },(error) =>{

      swal({
        title: "Erro!",
        text: "Não foi possível criar a vaga de estágio!",
        icon: "error",
      });

      //alert(error);
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
