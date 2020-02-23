import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  placeholderEventName: any;
  imgUrl: any;
  videoUrl: any;
  items = [];
  private item: any;

  constructor() { }

  ngOnInit() {
  }

  addImg() {
    return this.imgUrl;
  }
  addVideo() {
    return this.videoUrl;
  }
}
