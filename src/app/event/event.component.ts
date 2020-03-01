import {Component, OnInit, Output} from '@angular/core';
import {Item} from '../models/item.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  items: Item[];
  item: Item = {
    id: '',
    title: '',
    text: '',
    date: '',
    relative: '',
    complete: false,
  };

  constructor() {

  }

  ngOnInit() {
  }

  addEvent() {
    const newItem = {
      id: String(this.items.length + 1),
      title: this.item.title,
      text: this.item.text,
      date: this.item.date,
      relative: this.item.relative,
      complete: false
    };
    this.items.unshift(newItem);
  }
}
