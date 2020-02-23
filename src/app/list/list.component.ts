import { Component, OnInit } from '@angular/core';

export interface Item {
  title: string;
  text: string;
  date: number;
  id?: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: Item[] = [
    {title: 'привет', text: 'хай', date: 2019, id: 1},
    {title: 'ес', text: 'ура', date: 2020, id: 2}
    ];

  constructor() {

}

  ngOnInit() {
  }

}
