import { Component, OnInit } from '@angular/core';
import { AuthService, TokenPayload} from '../services/auth.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isLoading = false;

  model: any = {};

  credentials: TokenPayload = {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
    age: "",
    pdesease:"",
    allergy: ""
  };

  constructor(private auth: AuthService, private router: Router) {}


  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/login');
      },
      err => {
        console.error(err);
      }
    );
    this.isLoading = true;
  }

  ngOnInit(): void {
  }

}
