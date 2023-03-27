import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../class/category';
import { CategoryService } from '../service/category.service';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  cnt = 0;
  addItemForm = this.formBuilder.group({
    description: ['', Validators.required],
    foundInLine: ['', [Validators.required]],
    phone: ['', Validators.required],
    category: ['', Validators.required]
  });
  constructor(private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private itemService: ItemService,
    private router: Router
  ) { }
  getAll: Category[];
  ngOnInit() {
    this.getAll = this.categoryService.getAll();
  }
  submit() {
    this.cnt++;
    this.itemService.add(this.addItemForm.value);
    this.router.navigate(['/allItems/0']);
  }
}