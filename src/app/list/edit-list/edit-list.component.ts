import { Component, OnInit } from '@angular/core';
import {MainService} from '../../services/main.service';
import {Router} from '@angular/router';
import {Item} from '../../models/item.model';


@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {
  public items: Item[] = [];
  item: Item = {
    id: '',
    title: '',
    text: '',
    date: '',
    relative: '',
    complete: false,
  };

  constructor(
    private mainService: MainService, private router: Router
  ) { }

  ngOnInit() {
  }

  updateEvent() {
    const updateItem: Item = {
      id: String(this.items.length + 1),
      title: this.item.title,
      text: this.item.text,
      date: this.item.date,
      relative: this.item.relative,
      complete: false
    };

    this.mainService.updateItem('', updateItem);
    this.router.navigate(['/event']);
  }
}
