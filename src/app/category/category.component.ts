import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";

import {HttpSerService} from "../http-ser.service";
import { PagerService } from "../pager.service"


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  postsBlogList = [];
  req = {"r": "GetPostsWithCategory", "c": 0};
  category: string;
  private sub: any;

  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];

  constructor(private router: Router, private route: ActivatedRoute, private _httpService: HttpSerService, private pagerService: PagerService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.category = params['category'];
      if(this.category)
        this.setPostsWithCategoryList(this.category);
      else
        this.setPostsWithCategoryList(false);
    });
  }

  setPostsWithCategoryList(category)
  {
    if(category)
      this.req = {"r": "GetPostsWithCategory", "c": category};
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
