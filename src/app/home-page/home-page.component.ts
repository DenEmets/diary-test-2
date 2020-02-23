import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../list/list.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  placeholderSearch: any;
  textSortByRelative: any = 'По отношению к событию:';
  textSortByDate: any = 'По дате:';
  searchEvent: any = '';



  constructor() { }
  ngOnInit() {
  }

  onClick() {

  }
}
