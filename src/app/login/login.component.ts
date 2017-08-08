import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../_services/alert/alert.service';
import {AuthService} from "../_services/security/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = {
    username: "",
    password: ""
  };
  loading = false;
  returnUrl: string;

  username;
  password;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService) { }

  ngOnInit() {
    // reset login status
    this.authService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'home';
  }

  login() {
    this.loading = true;
    if (this.authService.login(this.model.username, this.model.password))
      this.router.navigate([this.returnUrl]);
    else
    {
      this.alertService.error('error');
      this.loading = false;
    }
  }

}
