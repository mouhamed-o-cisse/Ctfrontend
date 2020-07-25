import { Component, OnInit } from '@angular/core';
import { AuthService, TokenPayload} from '../services/auth.service'
import { Router } from '@angular/router'
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading = false;

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
  }

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/profile')
      },
      err => {
        console.error(err)
      }
    )
    this.isLoading = true;
  }

  ngOnInit(): void {
  }

}
