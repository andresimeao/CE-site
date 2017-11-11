import { Component, OnInit } from '@angular/core';

import {FormGroup, FormBuilder, Validators} from '@angular/forms'

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create-internship',
  templateUrl: './create-internship.component.html',
  styleUrls: ['./create-internship.component.css']
})
export class CreateInternshipComponent implements OnInit {

  addIntershipForm: FormGroup;
  AuthService: AuthService;
  

  constructor(private formbuilder: FormBuilder, authService: AuthService) { 
    this.AuthService = authService;
  }

  ngOnInit() {

    this.addIntershipForm = this.formbuilder.group({
      internshipVacancy:[null, Validators.required],
      period:[null, Validators.required],
      // morning:[false, Validators.required],
      // afternoon:[false, Validators.required],
      // night:[false, Validators.required],
      remuneration:[false, [Validators.required]],
      valueOfRemuneration:[null, [Validators.required]],
      benefit:[[], [Validators.required]],
      othersBenefit:[null, [Validators.required, Validators.minLength(6)]],
      technicalKnowledge:[null, [Validators.required, Validators.minLength(6)]],
      pernosalProfile:[null, [Validators.required, Validators.minLength(6)]],
      preference:[null, [Validators.required, Validators.minLength(6)]],
      schedule:[null, [Validators.required]],
      whoTalkSchedule:[null, [Validators.required, Validators.minLength(6)]],
      phone:[null, [Validators.required, Validators.minLength(10)]],
      email:[null, [Validators.required, Validators.minLength(10)]],
      whoCaringForEmail:[null, [Validators.required, Validators.minLength(10)]],
      nameOfCompany:[null, [Validators.required]],
      observations:[null],
    });

  }


}
