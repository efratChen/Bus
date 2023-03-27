import { Component, OnInit } from '@angular/core';
import { Category } from '../class/category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  Categories: Category[] = [];
  constructor(private category: CategoryService) {
  }
  ngOnInit() {
    this.Categories = this.category.getAll();
  }

}
