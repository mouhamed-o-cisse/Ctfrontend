import { Patient } from '../models/patient-model';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})

export class AdminService {

  private patients: Patient[] = [];

   patientSubject = new Subject<Patient[]>();

   constructor(private httpClient: HttpClient){}


  emitPatients() {
    this.patientSubject.next(this.patients);
  };

   getPatients() {
    return this.httpClient.get('https://ctbackend2.herokuapp.com/users/get-all').subscribe(
      (patients: Patient[]) => {
        console.log(patients);
        if (patients) {
          this.patients = patients;
          this.emitPatients();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
  //"heroku-postbuild": "ng build --prod",
