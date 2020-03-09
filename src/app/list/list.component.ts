import {Component, OnInit} from '@angular/core';
import { Item } from '../models/item.model';
import {MainService} from '../services/main.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
  })
export class ListComponent implements OnInit {
  items: Item[] = [];


  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.items = this.items.concat(this.mainService.getItems());
  }

  deleteEvent(id: string) {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
