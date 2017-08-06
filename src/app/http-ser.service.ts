import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from "rxjs/Observable"
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

@Injectable()
export class HttpSerService {

  serverUrl = "http://127.0.0.1/salvobertoncini-server/server.php"

  constructor (private _http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
  }

  getMethod(): Observable<any> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this._http
      .get(this.serverUrl, {headers: headers})
      .map((response: Response) => <any> response.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  postMethod(data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this._http.post(this.serverUrl, data, {
      headers: headers
    }).catch(this.handleError);
  }

  private handleError(error: Response)
  {
    console.error(error);
    let message = "Error status code ${error.status} at ${error.url}";
    return Observable.throw(message);
  }
}
