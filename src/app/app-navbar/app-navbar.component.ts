import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  pagesList = [ {name: 'Home', value: ''}, {name: 'About', value: 'about'}, {name:'Blog', value: 'blog'}, {name:'Contact', value: 'contact'}];

  constructor() {
  }

  ngOnInit() {
  }


}

