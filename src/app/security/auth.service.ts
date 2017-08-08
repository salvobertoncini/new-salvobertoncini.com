import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

import {HttpSerService} from "../http-ser.service"

@Injectable()
export class AuthService {
  constructor(private _httpService: HttpSerService) { }

  /*

  login(username: string, password: string) {
    return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  */

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
