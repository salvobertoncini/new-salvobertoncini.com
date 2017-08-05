import { Component, OnInit } from '@angular/core';
import { HttpSerService } from '../http-ser.service'

@Component({
  selector: 'app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent implements OnInit {

  getData: string;
  postData: string;

  //constructor(private _httpService: HttpSerService) { }

  ngOnInit() {
  }

}
