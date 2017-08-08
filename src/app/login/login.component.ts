import { Component, OnInit } from '@angular/core';
import {HttpSerService} from "../http-ser.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _httpService: HttpSerService) { }

  ngOnInit() {
  }


  login(username, password)
  {
    let req = {"r": "login", "u": username, "p": password};
    this._httpService.postMethod({js_object: req})
      .subscribe(
        response =>
        {
          console.log(response);
          if (response['response'])
            if(response['user'] && response['user'].token)
              localStorage.setItem('currentUser', response['user']);
        }
      );
  }

  logout()
  {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

}
