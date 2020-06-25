import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RdvService } from '../services/rdv.service';
import { Router } from '@angular/router';
import { Rdv } from '../models/rdv-model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.scss']
})
export class RendezVousComponent implements OnInit {

  rdvForm: FormGroup;


  horaireSubscription: Subscription;

  constructor(private formBuilder: FormBuilder,
              private rdvService: RdvService,
              private router: Router) { }

  // To initialize the form
  ngOnInit() {
    this.initForm();
  }


  initForm() {
    this.rdvForm = this.formBuilder.group({
      rdv_id:'',
      speciality:['', Validators.required],
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      phoneNumber:['', Validators.required],
      date:['', Validators.required]
      // time:['', Validators.required]
    });
  }

  onSubmitForm() {
    const formValue = this.rdvForm.value;
    const newRdv = new Rdv(
      formValue['rdv_id'],
      formValue['speciality'],
      formValue['firstName'],
      formValue['lastName'],
      formValue['phoneNumber'],
      formValue['date']
      // formValue['time']
    );
    this.rdvService.addRdv(newRdv);
    this.router.navigate(['/accueil']);
  }
}
