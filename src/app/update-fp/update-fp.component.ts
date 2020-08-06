import { Component, OnInit } from '@angular/core';
import { AdminService, UserUpdate } from '../services/admin.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-update-fp',
  templateUrl: './update-fp.component.html',
  styleUrls: ['./update-fp.component.scss']
})
export class UpdateFpComponent implements OnInit {

  isLoading = false;

  invalid = false;

  model: any = {};

  informations: UserUpdate = {
    email: "",
    antecedents_personnels: "",
    antecedents_familiaux: "",
    motif_de_consultation:"",
    bilan:"",
    diagnostic:"",
    traitement_recu: "",
    ordonnance: "",
    evolution: "",
    pro_rdv: ""

  };

  constructor(private admin: AdminService, private router: Router) {}

  submit() {
    this.admin.register(this.informations).subscribe(
      () => {
        this.router.navigateByUrl('a1dm0i1n00i1s1t4r1a1t1i1o1n1edm3i1n1i1s1t1r9a1t1i6o1n1a1dm0i1n00i1343244r1a1t1isdcfsen1edm3i1n1i1s1t1r9a1t1iaksbx2jj12kjb33j4ni1s1t4r1a1t1i1o1n1edm3i1n1i1s1t1r9a1t1i6o1n1/patients-list');
      },
      err => {
        console.error(err);
      }
    );
    this.isLoading = true;
    return new Promise (
      (resolve, reject) =>{

          setTimeout(
              () => {
                  this.isLoading = false;
                  resolve(true);
              }, 10000
            );

          setTimeout(
            () => {
                this.invalid = true;
                resolve(true);
            }, 10000
          );
      }
    );

  }

  ngOnInit(): void {
  }

}
