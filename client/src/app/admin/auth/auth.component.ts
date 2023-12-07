import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../model/user.model';
import { AuthService } from '../../model/auth.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {
  public user: User;
  public password: string;
  public errorMessage: string;

  constructor(private router: Router,
      private auth: AuthService) {}

  ngOnInit(): void {
    this.user = new User();
  }

  authenticate  (forms: NgForm)
  {
    if(forms.valid)
    {
      // perform auth
      this.auth.authenticate(this.user).subscribe(data => {
        if(data.success)
        {
          this.auth.storeUserData(data.token, data.user);
          this.router.navigateByUrl('admin/main');
        }
      })




      this.router.navigateByUrl("admin/main")
    }
    else
    {
      this.errorMessage = "Form Data Invalid";
    }
  }

}
