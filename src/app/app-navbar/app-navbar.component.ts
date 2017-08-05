import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  pagesList = [ {name: 'Home', value: 'index.html'}, {name: 'About', value: 'about.html'}, {name:'Blog', value: 'blog.html'}, {name:'Contact', value: 'contact.html'}];

  constructor() {
  }

  ngOnInit() {
  }


}

