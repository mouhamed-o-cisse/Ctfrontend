import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConseilsComponent } from './conseils/conseils.component';
import { NosSoinsComponent } from './nos-soins/nos-soins.component';
import { ContactComponent } from './contact/contact.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FichierPatientComponent } from './fichier-patient/fichier-patient.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { RdvListeComponent } from './rdv-liste/rdv-liste.component';
import { AdministrationComponent } from './administration/administration.component';
import { HeaderComponent } from './header/header.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { LocalisationComponent } from './localisation/localisation.component';

import {RdvService} from './services/rdv.service';


const appRoutes : Routes =[
  {
    path:'conseils', component: ConseilsComponent
  },
  {
    path:'nos-soins', component: NosSoinsComponent
  },
  {
    path:'contact', component: ContactComponent
  },
  {
    path:'accueil', component: AccueilComponent
  },
  {
    path:'fichier-patient', component: FichierPatientComponent
  },
  {
    path:'rendez-vous', component: RendezVousComponent
  },
  {
    path:'rdv-liste', component: RdvListeComponent
  },
  {
    path:'administration', component: AdministrationComponent
  },
  {
    path:'patients-list', component: PatientsListComponent
  },
  {
    path:'localisation', component: LocalisationComponent
  },
  ///////////////////////////////////////////////////////
  {
    path: '', component: AccueilComponent
  },
  {
   path: 'not-found', component: NotFoundComponent
 },
 {
   path: '**', redirectTo:'/not-found'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ConseilsComponent,
    NosSoinsComponent,
    ContactComponent,
    AccueilComponent,
    FichierPatientComponent,
    NotFoundComponent,
    RendezVousComponent,
    RdvListeComponent,
    AdministrationComponent,
    HeaderComponent,
    PatientsListComponent,
    LocalisationComponent,
    RdvListeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatExpansionModule,
    AgmCoreModule.forRoot({
      // clientId:''
      apiKey: 'AIzaSyDeOZm9roenPIldMf3K110wwu_vgThFYfs'
      /* apiKey is required, unless you are a
      premium customer, in which case you can
      use clientId
      */
    })
  ],
  providers: [RdvService],

  bootstrap: [AppComponent]
})
export class AppModule { }





// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     BrowserAnimationsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
