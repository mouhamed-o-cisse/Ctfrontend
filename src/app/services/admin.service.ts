import { Patient } from '../models/patient-model';
import { Subject } from 'rxjs/Subject';
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails } from '../models/userdetails'
// import { OnInit } from '@angular/core';


// interface OnInit {
//   ngOnInit()
// }

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface UserUpdate {
  email: string
  antecedents_personnels: string
  antecedents_familiaux: string
  motif_de_consultation:string
  bilan:string
  diagnostic:string
  traitement_recu: string
  ordonnance: string
  evolution: string
  pro_rdv: string
}

// export interface UserDetails {
//   id: number
//   first_name: string
//   last_name: string
//   email: string
//   password: string
//   phone_number: string
//   age: string
//   pdesease: string
//   allergy: string
//   created: string
//   antecedents_personnels: string
//   antecedents_familiaux: string
//   motif_de_consultation: string
//   bilan: string
//   diagnostic: string
//   traitement_recu: string
//   ordonnance: string
//   evolution: string
//   pro_rdv: string
//   last_update: string
// }


@Injectable({
  providedIn: 'root'
})


export class AdminService {

  detail : UserDetails;

  private patients: Patient[] = [];

  patientSubject = new Subject<Patient[]>();

  constructor(private httpClient: HttpClient){}

  emitPatients() {
    this.patientSubject.next(this.patients);
  };

  getPatients() {
    return this.httpClient.get('https://ctbackend2.herokuapp.com/users/get-all').subscribe(
      (patients: Patient[]) => {
        if (patients) {
          this.patients = patients;
          // console.log(patients.length);
          this.emitPatients();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public register(user: UserUpdate): Observable<any> {
    return this.httpClient.put('https://ctbackend2.herokuapp.com/users/update', user)
  }


  private userUrl = 'https://ctbackend2.herokuapp.com/users/one';  // URL to web api

  getDetails(id: number): Observable<UserDetails> {
    const url = `${this.userUrl}/${id}`;
    return this.httpClient.get<UserDetails>(url);
  }

}


