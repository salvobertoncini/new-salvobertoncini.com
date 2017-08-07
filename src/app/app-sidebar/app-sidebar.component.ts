import { Component, OnInit } from '@angular/core';
import {HttpSerService} from "../http-ser.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.css']
})
export class AppSidebarComponent implements OnInit {

  categoryError = [
    {
      "name": "something's wrong"
    }
  ];
  categoriesList = [];
  req = {"r": "GetCategoriesList"};

  constructor(private _httpService: HttpSerService) { }

  ngOnInit() {
    this.getAllCategories()
  }

  getAllCategories()
  {
    this._httpService.postMethod({js_object: this.req})
      .subscribe(
        response => {
          console.log(response);
          if (response['response'])
          {
            this.categoriesList = response['categoriesList'];
          }
          else
            this.categoriesList = this.categoryError;
        }
      );
  }

}
