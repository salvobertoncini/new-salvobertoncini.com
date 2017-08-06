import { Component, OnInit } from '@angular/core';
import {HttpSerService} from "../http-ser.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  req = {"r": "LastPostN", "n": 3};

  constructor(private _httpService: HttpSerService) {

  }

  ngOnInit() {this.getInfo() }

  getInfo()
  {
    this._httpService.postMethod({js_object: this.req})
      .subscribe(
        response => console.log(response)
      );
  }

}
