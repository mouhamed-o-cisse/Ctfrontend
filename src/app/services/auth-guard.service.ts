import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { AuthService } from './auth.service'

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/login')
      return false
    }
    return true

  }

  // canActivateChild() {
  //   if (!this.auth.adminLoggedIn()) {
  //     this.router.navigateByUrl('/a')
  //     return false
  //   }
  //   return true
  // }

}
