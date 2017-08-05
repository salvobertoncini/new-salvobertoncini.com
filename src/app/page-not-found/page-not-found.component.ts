import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  pagesList = [ {name: 'Home', value: ''}, {name: 'About', value: 'about'}, {name:'Blog', value: 'blog'}, {name:'Contact', value: 'contact'}];

  constructor() { }

  ngOnInit() {
  }

}
