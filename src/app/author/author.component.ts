import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Router} from '@angular/router';

import {HttpSerService} from "../http-ser.service";
import { PagerService } from "../pager.service"

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  postsBlogList = [];
  req = {"r": "GetPostsWithAuthor", "a": 0};
  author: string;
  private sub: any;

  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];

  constructor(private router: Router, private route: ActivatedRoute, private _httpService: HttpSerService, private pagerService: PagerService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.author = params['author'];
      if(this.author)
        this.setPostsWithCategoryList(this.author);
      else
        this.setPostsWithCategoryList(false);
    });
  }

  setPostsWithCategoryList(author)
  {
    if(author)
      this.req = {"r": "GetPostsWithAuthor", "a": author};
    this._httpService.postMethod({js_object: this.req})
      .subscribe(
        response => {
          console.log(response);
          if(response['response'])
          {
            this.postsBlogList = response['postsList'];
            this.setPage(1);
          }
          else
            this.router.navigate(['/page-not-found']);

        }
      );
  }

  setPage(page: number)
  {

    if (page < 1 || page > this.pager.totalPages) {
      page = 1;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.postsBlogList.length, page);

    // get current page of items
    this.pagedItems = this.postsBlogList.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
