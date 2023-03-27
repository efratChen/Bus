import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../class/item';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  Items: Item[];
  constructor(private item: ItemService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.Items = [];
      debugger;
      if (params.idCategory == 0)
        this.Items = this.item.getAll();
      else
        this.Items = this.item.getItemsByCategory(params.idCategory)

    });
  }
}
