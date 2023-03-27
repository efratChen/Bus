import { Injectable } from '@angular/core';
import { Item } from '../class/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Item[] = [];
  arr: Item[] = [];
  constructor() {

    this.items.push(new Item(1, "black wash", 402, "0541878965"));
    this.items.push(new Item(2, "red carriage mamas&papas", 318, "0504189756"));
    this.items.push(new Item(3, "grey suitacse with mickey mouse draw", 317, "0547896541"));
    this.items.push(new Item(4, "cerise color purse with just viza", 319, "054-8487717"));

    this.items.push(new Item(1, "black wash", 402, "0541878965"));
    this.items.push(new Item(2, "red carriage mamas&papas", 318, "0504189756"));
    this.items.push(new Item(3, "grey suitacse with mickey mouse draw", 317, "0547896541"));
    this.items.push(new Item(4, "cerise color purse with just viza", 319, "054-8487717"));

    this.items.push(new Item(1, "black wash", 402, "0541878965"));
    this.items.push(new Item(2, "red carriage mamas&papas", 318, "0504189756"));
    this.items.push(new Item(3, "grey suitacse with mickey mouse draw", 317, "0547896541"));
    this.items.push(new Item(4, "cerise color purse with just viza", 319, "054-8487717"));

    this.items.push(new Item(1, "black wash", 402, "0541878965"));
    this.items.push(new Item(2, "red carriage mamas&papas", 318, "0504189756"));
    this.items.push(new Item(3, "grey suitacse with mickey mouse draw", 317, "0547896541"));
    this.items.push(new Item(4, "cerise color purse with just viza", 319, "054-8487717"));


  }
  getAll(): Item[] {
    return this.items;
  }
  getItemsByCategory(idCategory: number): Item[] {
    this.arr = [];
    this.items.forEach(element => {
      if (element.categoryId == idCategory)
        this.arr.push(element);
    });
    return this.arr;
  }
  add(i: Item) {
    this.items.push(i);
  }
}


