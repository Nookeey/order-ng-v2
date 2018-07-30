import { AuthGuardsService } from './services/auth-guards.service';
import { AuthService } from './services/auth.service';
import { DetailsService } from './services/details.service';
import { OrderService } from './services/orders.service';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    SharedModule,
    NgbModule.forRoot()
  ],
  providers: [OrderService, DetailsService, AuthService, AuthGuardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
