import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { UserDetails } from "../models/userdetails";
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  detail : UserDetails ;

  constructor(
    private route: ActivatedRoute,
    private admin: AdminService) { }

    ngOnInit(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.admin.getDetails(id)
      .subscribe(detail => this.detail = detail);
    }
}
