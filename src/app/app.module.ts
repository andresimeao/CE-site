import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
//services
import { AuthService } from './services/auth.service';
//Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
//componets
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginComponent } from './login/login.component';
//router
import {routing} from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    routing

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
