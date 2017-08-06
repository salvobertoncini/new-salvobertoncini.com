import { Component, OnInit } from '@angular/core';
import {HttpSerService} from "../http-ser.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  testVar = [];
  errorMessage: string;

  constructor(private _httpService: HttpSerService) {

  }

  ngOnInit() {this.getInfo2() }


  getInfo(){
    this._httpService.getMethod()
      .subscribe(
        response => this.testVar = response,
        error => this.errorMessage = <any>error
      );
    console.log(this.testVar);
  }


  getInfo2()
  {
    this._httpService.postMethod({r: "Testing"})
      .subscribe(
        response => this.testVar = response
      );
    console.log(this.testVar);
  }

}
