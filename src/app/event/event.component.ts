import {Component, OnInit, ViewChild} from '@angular/core';
import {Item} from '../models/item.model';
import {MainService} from '../services/main.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  public items: Item[];
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

  constructor(private mainService: MainService, private router: Router) {

  }

  ngOnInit() {
    this.items = this.mainService.getItems();
  }

  addEvent() {
    const newItem: Item = {
      id: String(this.items.length + 1),
      title: this.item.title,
      text: this.item.text,
      date: this.item.date,
      relative: this.item.relative,
      complete: false
    };
    this.mainService.addItem(newItem);
    this.form.reset();
    this.router.navigate(['/']);
  }
}
