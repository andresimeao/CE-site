import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomePageCompanyComponent } from './home-page-company/home-page-company.component';
import { HomePageCentralComponent } from './home-page-central/home-page-central.component';

const APP_ROUTES: Routes =[

{path:'login', component:LoginComponent},
{path:'create-user', component:CreateUserComponent},
{path:'', component:LoginComponent},
{path:'home-page-company', component:HomePageCompanyComponent},
{path:'home-page-central', component:HomePageCentralComponent}


];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);