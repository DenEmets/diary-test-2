import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {Item} from '../models/item.model';
import {MainService} from '../services/main.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() items: Item[];
  item: Item = {
    id: '',
    title: '',
    text: '',
    date: '',
    relative: '',
    complete: false,
  };
  // @ts-ignore
  @ViewChild('form') form;

  constructor(private server: MainService) {

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
    this.form.reset();
  }
}
