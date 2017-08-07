import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  postsError = [
    {
      id: 1,
      image: "../../assets/images/750x500-1.jpg",
      author: "Salvo Bertoncini",
      authorslug: "salvo-bertoncini",
      category: "General",
      date: "the 5th August 2017",
      title: "Vintage-Inspired Finds for Your Home",
      subtitle: "Few months ago, we found ridiculously cheap plane tickets for Boston and off we went. It was our first visit to the city and, believe it or not, Stockholm in February was more pleasant than Boston in March. It probably has a lot to do with the fact that we arrived completely unprepared. That I, in my converse and thin jacket, did not end up with pneumonia is honestly not even fair.",
      slug: "vintage-inspired-finds-for-your-home",
      text: "<p>A newly-developed mathematical method can detect geometric structure in neural activity in the brain. “Previously, in order to understand this structure, scientists needed to relate neural activity to some specific external stimulus,” said Vladimir Itskov, associate professor of mathematics at Penn State University. “Our method is the first to be able to reveal this structure without our knowing an external stimulus ahead of time. We’ve now shown that our new method will allow us to explore the organizational structure of neurons without knowing their function in advance.”</p>\n" +
      "\n" +
      "          <p>“The traditional methods used by researchers to analyze the relationship between the activities of neurons were adopted from physics,” said Carina Curto, associate professor of mathematics at Penn State, “but neuroscience data doesn’t necessarily play by the same rules as data from physics, so we need new tools. Our method is a first step toward developing a new mathematical toolkit to uncover the structure of neural circuits with unknown function in the brain.”</p>\n" +
      "\n" +
      "          <h3>Math reveals structure in neural activity in the brain</h3>\n" +
      "          <p>The method — clique topology — was developed by an interdisciplinary team of researchers at Penn State, the University of Pennsylvania, the Howard Hughes Medical Institute, and the University of Nebraska-Lincoln. The method is described in a paper that will be posted in the early online edition of the journal Proceedings of the National Academy of Sciences during the week ending October 23, 2015.</p>\n" +
      "\n" +
      "          <p>“We have adopted approaches from the field of algebraic topology that previously had been used primarily in the domain of pure mathematics and have applied them to experimental data on the activity of place cells — specialized neurons in the part of the brain called the hippocampus that sense the position of an animal in its environment,” said Curto.</p>",
      tags: "tag, tag, tag",
      readability: "2 min"
    }
  ];
  slug: string;
  private sub: any;
  postWithSlugList: any;
  req = {};

  constructor(private route: ActivatedRoute, private _sanitizer: DomSanitizer, private _httpService: HttpSerService) {}

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
            this.postWithSlugList = response['postsList'];
          else
            this.postWithSlugList = this.postsError;
        }
      );
  }

  getCountWord(str)
  {
    return str.split(' ').length;
  }

  getCalcReadability(counter)
  {
    return Math.ceil((counter / 200))+"' ";
  }

}
