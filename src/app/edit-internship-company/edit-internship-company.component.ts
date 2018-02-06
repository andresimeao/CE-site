import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Route } from '@angular/router/src/config';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-edit-internship-company',
  templateUrl: './edit-internship-company.component.html',
  styleUrls: ['./edit-internship-company.component.css']
})
export class EditInternshipCompanyComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authservice: AuthService, private formbuilder: FormBuilder, public router: Router) { }

  id: any;
  intership: any;

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
    let intership = this.authservice.afDB.object('/interships/' + this.id).snapshotChanges()
    intership.forEach(element => {
      this.intership = element
    })

  }
  save(form) {

    this.authservice.afDB.object('/interships/' + this.id).update({
      internshipVacancy: form.value.internshipVacancy,
      observations: form.value.observations,
      personalProfile: form.value.personalProfile,
      preference: form.value.preference,
      technicalKnowledge: form.value.technicalKnowledge,
      valueOfRemuneration: form.value.valueOfRemuneration || " ",
      status: 0

    }).then(resp => {
      if (form.value.schedule) {
        this.authservice.afDB.object('/interships/' + this.id).update({
          email: form.value.email,
          whoCaringForEmail: form.value.whoCaringForEmail,
          whoTalkSchedule: form.value.whoTalkSchedule,
          phone: form.value.phone
        }).then(response => {
          if (form.value.benefit) {
            this.authservice.afDB.object('/interships/' + this.id).update({
              othersBenefit: form.value.othersBenefit
            }).then(response => {
              alert('Salvo com sucesso!');
            });
          }
        });
      }

    }).catch(error => {
      alert('Erro: ' + error);
    })

  }
  updateScheduleTrue() {
    this.authservice.afDB.object('/interships/' + this.id).update({ schedule: true });
  }
  updateScheduleFalse() {
    this.authservice.afDB.object('/interships/' + this.id).update({ schedule: false });
  }
  updateRemunerationTrue() {
    this.authservice.afDB.object('/interships/' + this.id).update({ remuneration: true });
  }
  updateRemunerationFalse() {
    this.authservice.afDB.object('/interships/' + this.id).update({ remuneration: false });
  }
  updateBenefit() {
    this.authservice.afDB.object('/interships/' + this.id).update({ benefit: !this.intership.payload.val().benefit });
  }

}
