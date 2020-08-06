import { Component, OnInit } from '@angular/core';
import { Rdv } from '../models/rdv-model';
import { Patient } from '../models/patient-model';
import { Subscription } from 'rxjs/Subscription';
import { RdvService } from '../services/rdv.service';
import { AdminService } from '../services/admin.service';


@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  rdvstotal = 0;

  patientstotal = 0;

  rdvs: Rdv[];

  rdvSubscription: Subscription;

  patients: Patient[];

  patientSubscription: Subscription;

  constructor(private rdvService: RdvService, private adminService: AdminService) { }

  ngOnInit(): void {
    this.rdvService.getRdvs();
    this.rdvSubscription = this.rdvService.rdvSubject.subscribe(
      (rdvs: Rdv[]) => {
        if(rdvs){ this.rdvs = rdvs;
        // console.log(rdvs.length);
      }
      this.rdvstotal = rdvs.length;
      }
    );

    this.rdvService.emitRdvs();



    this.adminService.getPatients();
    this.patientSubscription = this.adminService.patientSubject.subscribe(
      (patients: Patient[]) => {
        if(patients){ this.patients = patients;
        // console.log(patients);
      }
        this.patientstotal = patients.length;
      }
    );
    this.adminService.emitPatients();

  }


  ngOnDestroy(){
    this.rdvSubscription.unsubscribe();
    this.patientSubscription.unsubscribe();
  }

}
