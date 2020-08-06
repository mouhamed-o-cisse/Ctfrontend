import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { AgmCoreModule } from '@agm/core';
import { MustMatchDirective } from './helpers/must-match.directives';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { registerLocaleData } from '@angular/common';
// For the date to be in french THERE IS SOMETHING IN PROVIDERS TOO
import localeFr from '@angular/common/locales/fr';
// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');
import { LOCALE_ID } from '@angular/core';


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

import { AuthService } from './services/auth.service'
import { AuthGuardService } from './services/auth-guard.service'
import { RdvService } from './services/rdv.service';
import { AdminService } from './services/admin.service';
import { FooterComponent } from './footer/footer.component';
import { NheaderComponent } from './nheader/nheader.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FpListeComponent } from './fp-liste/fp-liste.component';
import { UpdateFpComponent } from './update-fp/update-fp.component';
import { ListeComponent } from './liste/liste.component';
import { AheaderComponent } from './aheader/aheader.component';
import { UserDetailsComponent } from './user-details/user-details.component';


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
    path:'a1dm0i1n00i1s1t4r1a1t1i1o1n1edm3i1n1i1s1t1r9a1t1i6o1n1a1dm0i1n00i1343244r1a1t1isdcfsen1edm3i1n1i1s1t1r9a1t1iaksbx2jj12kjb33j4ni1s1t4r1a1t1i1o1n1edm3i1n1i1s1t1r9a1t1i6o1n1/rdv-liste', component: RdvListeComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'liste', component: ListeComponent
  },
  {
    path:'a1dm0i1n00i1s1t4r1a1t1i1o1n1edm3i1n1i1s1t1r9a1t1i6o1n1a1dm0i1n00i1343244r1a1t1isdcfsen1edm3i1n1i1s1t1r9a1t1iaksbx2jj12kjb33j4ni1s1t4r1a1t1i1o1n1edm3i1n1i1s1t1r9a1t1i6o1n1/patients-list/user-details/:id', component: UserDetailsComponent
  },
  // {
  //   path:'patients-list/user/add/:id', component: UserDetailsComponent
  // },
  {
    path:'signup', component: SignupComponent
  },
  {
    path:'profile', component: ProfileComponent, canActivate:[AuthGuardService]
  },
  {
    path:'a', component: AdminloginComponent
  },
  {
    path:'a1dm0i1n00i1s1t4r1a1t1i1o1n1edm3i1n1i1s1t1r9a1t1i6o1n1a1dm0i1n00i1343244r1a1t1isdcfsen1edm3i1n1i1s1t1r9a1t1iaksbx2jj12kjb33j4ni1s1t4r1a1t1i1o1n1edm3i1n1i1s1t1r9a1t1i6o1n1', component: AdministrationComponent
    // , canActivateChild:[AuthGuardService]
  },
  {
    path:'a1dm0i1n00i1s1t4r1a1t1i1o1n1edm3i1n1i1s1t1r9a1t1i6o1n1a1dm0i1n00i1343244r1a1t1isdcfsen1edm3i1n1i1s1t1r9a1t1iaksbx2jj12kjb33j4ni1s1t4r1a1t1i1o1n1edm3i1n1i1s1t1r9a1t1i6o1n1/patients-list', component: PatientsListComponent
  },
  {
    path:'a1dm0i1n00i1s1t4r1a1t1i1o1n1edm3i1n1i1s1t1r9a1t1i6o1n1a1dm0i1n00i1343244r1a1t1isdcfsen1edm3i1n1i1s1t1r9a1t1iaksbx2jj12kjb33j4ni1s1t4r1a1t1i1o1n1edm3i1n1i1s1t1r9a1t1i6o1n1/mettre-a-jour', component: UpdateFpComponent
  },
  {
    path:'a1dm0i1n00i1s1t4r1a1t1i1o1n1edm3i1n1i1s1t1r9a1t1i6o1n1a1dm0i1n00i1343244r1a1t1isdcfsen1edm3i1n1i1s1t1r9a1t1iaksbx2jj12kjb33j4ni1s1t4r1a1t1i1o1n1edm3i1n1i1s1t1r9a1t1i6o1n1/patients-list/user-details/mettre-a-jour', component: UpdateFpComponent
  },
  {
    path:'f-patients', component: FpListeComponent
  },
  {
    path:'localisation', component: LocalisationComponent
  },
  {
    path:'footer', component: FooterComponent
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
    FichierPatientComponent,
    PatientsListComponent,
    LocalisationComponent,
    RdvListeComponent,
    MustMatchDirective,
    FooterComponent,
    NheaderComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    AdminloginComponent,
    FpListeComponent,
    UpdateFpComponent,
    ListeComponent,
    AheaderComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    AgmCoreModule.forRoot({
      // clientId:''
      apiKey: 'AIzaSyDeOZm9roenPIldMf3K110wwu_vgThFYfs'
      /* apiKey is required, unless you are a
      premium customer, in which case you can
      use clientId
      */
    }),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [RdvService, AuthGuardService, AuthService, AdminService,
    // IN ORDER TO DISPLLAY THE DATE IN FRENCH
    {provide: LOCALE_ID, useValue: 'fr' }
  ],

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
