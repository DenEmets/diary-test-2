import { Injectable } from '@angular/core';
import {Item} from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private items: Item[] = [];

  public addItem(item: Item) {
    this.items.unshift(item);
  }

  public getItems() {
    return this.items.slice();
  }

  public updateItem(id: string, updateItem: Item) {
    const index = this.items.findIndex((item: Item) => item.id === id);
    this.items[index] = updateItem;
  }


  constructor() { }
}
