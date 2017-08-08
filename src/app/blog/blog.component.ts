import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Router} from '@angular/router';

import {HttpSerService} from "../_services/http/http-ser.service";
import { PagerService } from "../_services/pagination/pager.service"

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  postsBlogList = [];
  req = {"r": "LastPostN", "n": 0};
  page: string;
  private sub: any;

  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];

  constructor(private router: Router, private route: ActivatedRoute, private _httpService: HttpSerService, private pagerService: PagerService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.page = params['page'];
      if(this.page)
        this.getAllPosts(+this.page);
      else
        this.getAllPosts(1);
    });
  }

  public setPostsHomeList(postsHomeList) {
    this.postsBlogList = postsHomeList;
  }

  getAllPosts(currpage: number)
  {
    this._httpService.postMethod({js_object: this.req})
      .subscribe(
        response => {
          console.log(response);
          if(response['response'])
          {
            this.postsBlogList = response['postsList'];
            this.setPage(currpage);
          }
          else
            this.router.navigate(['/page-not-found']);
        }
      );
  }

  setPage(page: number)
  {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.postsBlogList.length, 1);

    if (page < 1 || page > this.pager.totalPages) {
      page = 1;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.postsBlogList.length, page);

    // get current page of items
    this.pagedItems = this.postsBlogList.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
