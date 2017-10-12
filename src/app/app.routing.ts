import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';

const APP_ROUTES: Routes =[

{path:'', component:LoginComponent},
{path:'create-user', component:CreateUserComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);