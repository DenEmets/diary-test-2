import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  searchTitleText: '';
  sortByRelative: 'По отношению к событию:';
  sortByDate: 'По дате:';

  constructor() { }
  ngOnInit() {

  }


}
