import { Component, OnInit } from '@angular/core';
import { AuthService, Admin} from '../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  isLoading = false;

  invalid = false;

  credentials: Admin = {
    id: 0,
    username: "",
    password: ""
  }

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.adminlogin(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/a1dm0i1n00i1s1t4r1a1t1i1o1n1edm3i1n1i1s1t1r9a1t1i6o1n1a1dm0i1n00i1343244r1a1t1isdcfsen1edm3i1n1i1s1t1r9a1t1iaksbx2jj12kjb33j4ni1s1t4r1a1t1i1o1n1edm3i1n1i1s1t1r9a1t1i6o1n1')
      },
      err => {
        console.error(err)
      }
    )
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
