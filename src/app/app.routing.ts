import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomePageCompanyComponent } from './home-page-company/home-page-company.component';
import { HomePageCentralComponent } from './home-page-central/home-page-central.component';
import { CreateInternshipComponent } from './create-internship/create-internship.component';
import { ShowIntershipsCentralComponent } from './show-interships-central/show-interships-central.component';
import { IntershipDetailComponent } from './intership-detail/intership-detail.component';
import { EditInternshipCompanyComponent } from './edit-internship-company/edit-internship-company.component';
const APP_ROUTES: Routes =[

{path:'login', component:LoginComponent},
{path:'create-user', component:CreateUserComponent},
{path:'', component:LoginComponent},
{path:'home-page-company', component:HomePageCompanyComponent},
{path:'home-page-central', component:HomePageCentralComponent},
{path:'create-internship', component:CreateInternshipComponent},
{path:'show-interships-central', component:ShowIntershipsCentralComponent},
{path:'show-intership-central/:id', component:IntershipDetailComponent},
{path:'edit-internship-company/:id', component:EditInternshipCompanyComponent},


];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);