import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Route } from '@angular/router/src/config';
import { MessagingService } from '../services/messaging.service';

import { Router } from '@angular/router';

import swal from 'sweetalert';



@Component({
  selector: 'app-intership-detail',
  templateUrl: './intership-detail.component.html',
  styleUrls: ['./intership-detail.component.css']
})
export class IntershipDetailComponent implements OnInit {


  constructor(private route: ActivatedRoute, private authservice: AuthService, private formbuilder: FormBuilder, public router: Router, public message: MessagingService) {

  }
  cancellationReason: any;
  observation: any;
  id: any;
  semester: any = null;
  program: any = null;
  intership: any;
  optionSemester: any[] = [{ name: 'ADS', velue: 'ADS' }, { name: 'INFO', velue: 'INFO' }, { name: 'AGRO', velue: 'AGRO' }]


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    let intership = this.authservice.afDB.object('/interships/' + this.id).snapshotChanges()
    intership.forEach(element => {
      this.intership = element
    })

  }
  save(form) {
    let teste = 'programador web'
    this.authservice.afDB.object('/interships/' + this.id).update({
      internshipVacancy: form.value.internshipVacancy,
      observations: form.value.observations,
      personalProfile: form.value.personalProfile,
      preference: form.value.preference,
      technicalKnowledge: form.value.technicalKnowledge,
    }).then(resp => {

      if (this.intership.payload.val().remuneration) {
        this.authservice.afDB.object('/interships/' + this.id).update({
          valueOfRemuneration: form.value.valueOfRemuneration
        }).then(resp => {
          console.log("Remuneração salva");
        });
      }
      if (this.intership.payload.val().schedule) {
        this.authservice.afDB.object('/interships/' + this.id).update({
          email: form.value.email,
          whoCaringForEmail: form.value.whoCaringForEmail,
          whoTalkSchedule: form.value.whoTalkSchedule,
          phone: form.value.phone
        }).then(response => {
          console.log("Agenda salva");
        });
      }
      if (this.intership.payload.val().benefit) {
        this.authservice.afDB.object('/interships/' + this.id).update({
          othersBenefit: form.value.othersBenefit
        }).then(response => {
          console.log("Beneficio salvo");
        });
      }

      swal({
        icon: 'success',
        title: 'Atualizado',
        text: 'O estágio foi atualizado!',
      })

    }).catch(error => {

      swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao atualizar vaga de estágio!',
      })

      //alert('Erro: ' + error);
    })

  }

  updateScheduleTrue() {
    this.authservice.afDB.object('/interships/' + this.id).update({ schedule: 'true' });
  }
  updateScheduleFalse() {
    this.authservice.afDB.object('/interships/' + this.id).update({ schedule: 'false' });
  }


  approved(): void {
    let rot = this;
    this.authservice.afDB.object('/interships/' + this.id).update({
      program: this.program,
      semester: this.semester,
      cancellationReason: false,
      status: 1

    }).then(resp => {
      if (this.program == "Análise e Desenvolvimento de Sistemas") {
        this.message.sendMessageAds(this.id);
      }
      if (this.program == "Informática para negócios") {
        this.message.sendMessageInfo(this.id)
      }
      if (this.program == "Agronegócio") {
        this.message.sendMessageAgro(this.id);
      }

      swal({
        icon: 'success',
        title: 'Aprovado!',
        text: 'A vaga de estágio foi aprovado com sucesso!',
      })

      //alert('Liberado com sucesso !');
      rot.router.navigate(['/show-interships-central']);
    }).catch(error => {

      swal({
        icon: 'error',
        title: 'Erro!',
        text: 'Não foi possível aprovar a vaga de estágio !',
      })

      //alert('Erro: ' + error);
    })

  }

  disapproved(): void {
    this.observation = true;

    swal({
      text: "Qual o motivo da rejeição da vaga de estágio?",
      buttons: {
        cancel: true,
        confirm: true,
      },
      content: {
        element: "input",
        attributes: {
          type: "text",
        },
      }
    }).then(value => {

      if (value !== null && value !== "") {
        console.log(value);

        this.authservice.afDB.object('/interships/' + this.id).update({
          status: 2,
          cancellationReason: value

        }).then(resp => {

          swal({
            icon: 'success',
            title: 'Rejeitado!',
            text: 'A vaga de estágio foi rejeitada com sucesso!',
          });

          this.router.navigate(['/show-interships-central']);

        }).catch(error => {

          swal({
            icon: 'error',
            title: 'Erro!',
            text: 'Não foi possível rejeitar a vaga de estágio !',
          });

        });

      }

    });
  }

}
