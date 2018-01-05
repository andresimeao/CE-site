import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Route } from '@angular/router/src/config';

import { Router } from '@angular/router';



@Component({
  selector: 'app-intership-detail',
  templateUrl: './intership-detail.component.html',
  styleUrls: ['./intership-detail.component.css']
})
export class IntershipDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authservice:AuthService,
    private formbuilder: FormBuilder, public router:Router) {}
cancellationReason:any;
observation:any;
id:any;
semester:any;
program:any = '';
intership:any;
optionSemester:any[] = [{name:'ADS',velue:'ADS'},{name:'INFO',velue:'INFO'},{name:'AGRO',velue:'AGRO'}]

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    let intership = this.authservice.afDB.object('/interships/' +this.id).snapshotChanges()
    intership.forEach(element => {
      this.intership = element
      console.log('elemente: ', element);
      console.log('intership: ', this.intership);
    })
    
  }
   save(form){
     console.log('formulario: ',form.value)
    let teste = 'programador web'
      this.authservice.afDB.object('/interships/'+this.id).update({
        internshipVacancy:form.value.internshipVacancy,
        observations:form.value.observations,
        personalProfile:form.value.personalProfile,
        preference:form.value.preference,
        technicalKnowledge:form.value.technicalKnowledge,
        valueOfRemuneration:form.value.valueOfRemuneration 
    }).then(resp =>{
        alert('salvo com sucesso!');
      }).catch(error =>{
        alert('Erro: ' + error);
      })
    
  }

  updateScheduleTrue(){
    this.authservice.afDB.object('/interships/'+this.id).update({schedule:'true'});
  }
  updateScheduleFalse(){
    this.authservice.afDB.object('/interships/'+this.id).update({schedule:'false'});
  }

  
  approved():void{
    let rot = this;
    this.authservice.afDB.object('/interships/'+this.id).update({
      program:this.program,
      semester: this.semester,
      cancellationReason:false,
      status: 1

  }).then(resp =>{
      alert('Liberado com sucesso !');
      rot.router.navigate(['/show-interships-central']);
    }).catch(error =>{
      alert('Erro: ' + error);
    })

  }

  
  disapproved(obs):void{

    console.log(obs);
    let rot = this;
    this.authservice.afDB.object('/interships/'+this.id).update({
      status: 2,
      cancellationReason:obs

  }).then(resp =>{
      alert('Cancelado com sucesso !');
      rot.router.navigate(['/show-interships-central']);
    }).catch(error =>{
      alert('Erro: ' + error);
    })
  }

  showObservation():void{
    this.observation = true;
  }
}
