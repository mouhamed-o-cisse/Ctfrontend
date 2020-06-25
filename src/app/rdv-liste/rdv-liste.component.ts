import { Component, OnDestroy, OnInit } from '@angular/core';
import { Rdv } from '../models/rdv-model';
import { Subscription } from 'rxjs/Subscription';
import { RdvService } from '../services/rdv.service';


@Component({
  selector: 'app-rdv-liste',
  templateUrl: './rdv-liste.component.html',
  styleUrls: ['./rdv-liste.component.scss']
})
export class RdvListeComponent implements OnInit {

  rdvs: Rdv[];

  rdvSubscription: Subscription;

  constructor(private rdvService: RdvService) { }

  ngOnInit(): void {
    this.rdvService.getRdvs();
    this.rdvSubscription = this.rdvService.rdvSubject.subscribe(
      (rdvs: Rdv[]) => {
        if(rdvs){ this.rdvs = rdvs;
        console.log(rdvs);}

        else{

        }
      }
    );
    this.rdvService.emitRdvs();
  }


  ngOnDestroy(){
    this.rdvSubscription.unsubscribe();
  }

}

