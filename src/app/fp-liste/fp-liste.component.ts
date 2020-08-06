import { Component, OnDestroy, OnInit } from '@angular/core';
import { Patient } from '../models/patient-model';
import { Subscription } from 'rxjs/Subscription';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-fp-liste',
  templateUrl: './fp-liste.component.html',
  styleUrls: ['./fp-liste.component.scss']
})
export class FpListeComponent implements OnInit {

  patients: Patient[];

  patientSubscription: Subscription;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getPatients();
    this.patientSubscription = this.adminService.patientSubject.subscribe(
      (patients: Patient[]) => {
        if(patients){ this.patients = patients;
        // console.log(patients);
      }

        else{

        }
      }
    );
    this.adminService.emitPatients();
  }


  ngOnDestroy(){
    this.patientSubscription.unsubscribe();
  }

}
