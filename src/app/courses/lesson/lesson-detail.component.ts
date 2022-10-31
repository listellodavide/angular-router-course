import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LessonDetail} from "../model/lesson-detail";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'lesson',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {

  lesson: LessonDetail;
  // lesson$: Observable<LessonDetail>;

  constructor(private route: ActivatedRoute) {

    console.log("Created LessonDetailComponent...");

  }

  ngOnInit() {
    // this is not a good way to fetch data from the router, I am going to fix this as a second step
    this.lesson = this.route.snapshot.data["lesson"];
  }



}
