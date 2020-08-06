import { Component, OnDestroy, OnInit } from '@angular/core';
import { Patient } from '../models/patient-model';
import { Subscription } from 'rxjs/Subscription';
import { AdminService } from '../services/admin.service';


@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {

  nombreTotal = 0;

  patients: Patient[];

  patientSubscription: Subscription;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getPatients();
    this.patientSubscription = this.adminService.patientSubject.subscribe(
      (patients: Patient[]) => {
        if(patients){
          this.patients = patients;
          // console.log(patients)
        }
        this.nombreTotal = patients.length;

        // else{}
      }
    );
    this.adminService.emitPatients();
  }


  ngOnDestroy(){
    this.patientSubscription.unsubscribe();
  }

}
