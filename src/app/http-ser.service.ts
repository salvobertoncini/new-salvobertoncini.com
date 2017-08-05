import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class HttpSerService {

  http: Http;
  returnCommentStatus:Object = [];
  posts_Url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(public _http: Http)
  {
    this.http = _http;
  }

  message = {
    "userId": 1,
    "id": 1000,
    "title": "Testing",
    "body": "prova di test lol"
  };

  postJSON()
  {
    return this.http.post(this.posts_Url, this.message, {
    })
      .map(res =>  res.json());
  }

}
