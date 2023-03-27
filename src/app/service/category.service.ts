import { Injectable } from '@angular/core';
import { Category } from '../class/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [];
  i: number = 1;
  constructor() {
    this.categories.push(new Category(this.i++, "bag and purse", "red"));
    this.categories.push(new Category(this.i++, "suitcase", "blue"));
    this.categories.push(new Category(this.i++, "carriage", "yellow"));
    this.categories.push(new Category(this.i++, "clothed item", "green"));
  }
  getAll(): Category[] {
    return this.categories;
  }
}
