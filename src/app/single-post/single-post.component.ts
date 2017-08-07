import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import { Router} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SecurityContext } from '@angular/core';
import {HttpSerService} from "../http-ser.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  slug: string;
  private sub: any;
  postsTitleList: any;
  postWithSlugList: any;
  req = {};

  constructor(private router: Router, private route: ActivatedRoute, private _sanitizer: DomSanitizer, private _httpService: HttpSerService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.req = {"r": "GetPostWithSlug", "s": this.slug};
      this.postWithSlugList = this.getPostWithSlug(this.req);
      /*
      this.postWithSlug[0].readability = this.getCalcReadability(this.getCountWord(this.postWithSlug[0].text));
      this._sanitizer.sanitize(SecurityContext.HTML, this.postWithSlug[0].title);// (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      */
    });
  }

  getPostWithSlug(req)
  {
    this._httpService.postMethod({js_object: req})
      .subscribe(
        response =>
        {
          console.log(response);
          if (response['response'])
          {
            this.postWithSlugList = response['postsList'];
            this.postsTitleList = response['postsTitleList'];
          }
          else
            this.router.navigate(['/page-not-found']);
        }
      );
  }

}
