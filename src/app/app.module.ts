import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';


//services
import { AuthService } from './services/auth.service';
import { IntershipService } from './services/intership.service';
import { MessagingService } from './services/messaging.service'
//Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';

//componets
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginComponent } from './login/login.component';
import { HomePageCompanyComponent } from './home-page-company/home-page-company.component';
import { CreateInternshipComponent } from './create-internship/create-internship.component';
import { HomePageCentralComponent } from './home-page-central/home-page-central.component';
import { ShowIntershipsCentralComponent } from './show-interships-central/show-interships-central.component';
import { IntershipDetailComponent } from './intership-detail/intership-detail.component';
import { EditInternshipCompanyComponent } from './edit-internship-company/edit-internship-company.component';
import { ShowInternshipCompanyComponent } from './show-internship-company/show-internship-company.component';
import { CreateInternshipCentralComponent } from './create-internship-central/create-internship-central.component';

//router
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    LoginComponent,
    HomePageCompanyComponent,
    HomePageCentralComponent,
    CreateInternshipComponent,
    ShowIntershipsCentralComponent,
    IntershipDetailComponent,
    EditInternshipCompanyComponent,
    ShowInternshipCompanyComponent,
    CreateInternshipCentralComponent,
    ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
    

  ],
  providers: [AuthService, IntershipService, MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
