import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import {MainService} from '../services/main.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [MainService]
})
export class ListComponent implements OnInit {
  items: Item[] = [
    {title: 'привет', text: 'хай', date: '2019', relative: 'положительно', id: '1', complete: false},
    {title: 'та дам!', text: 'ура', date: '2020', relative: 'отрицательно', id: '2', complete: true}
  ];

  constructor(
    private server: MainService
  ) { }

  ngOnInit() {
  }

  deleteEvent(id: string) {
    // confirm('Вы точно хотите удалить это событие, возможно, очень важное для вас?');
    this.items = this.items.filter((item) => item.id !== id);
  }
}
