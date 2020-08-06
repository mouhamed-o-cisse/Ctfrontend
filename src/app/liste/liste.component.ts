import { Component, OnDestroy, OnInit } from '@angular/core';
import { Patient } from '../models/patient-model';
import { Subscription } from 'rxjs/Subscription';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
