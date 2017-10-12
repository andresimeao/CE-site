import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { CreateUserComponent } from './create-user/create-user.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.config, 'CEFRP'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
