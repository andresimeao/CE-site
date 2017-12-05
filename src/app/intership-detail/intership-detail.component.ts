import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'


@Component({
  selector: 'app-intership-detail',
  templateUrl: './intership-detail.component.html',
  styleUrls: ['./intership-detail.component.css']
})
export class IntershipDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authservice:AuthService,
    private formbuilder: FormBuilder) { }

id:any;
intership:any;
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
    console.log(form.value);
    
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
}
