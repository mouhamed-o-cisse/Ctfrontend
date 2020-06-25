import { Rdv } from '../models/rdv-model';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})

export class RdvService {

  private rdvs: Rdv[] = [];

   rdvSubject = new Subject<Rdv[]>();

   constructor(private httpClient: HttpClient){}


  emitRdvs() {
    this.rdvSubject.next(this.rdvs);
  };

   getRdvs() {
    return this.httpClient.get('https://ctbackend.herokuapp.com/api/rdvs/get-rdvs').subscribe(
      (rdvs: Rdv[]) => {
        if (rdvs) {
          this.rdvs = rdvs;
          this.emitRdvs();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addRdv(rdv: Rdv) {
        return new Promise((resolve, reject) => {
          this.httpClient.post('https://ctbackend.herokuapp.com/api/rdvs/add-rdv', rdv).subscribe(
            (response) => {
              resolve(response);
            },
            (error) => {
              reject(error);
            }
          );
        });
     };
}
