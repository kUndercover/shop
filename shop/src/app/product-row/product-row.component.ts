import { Component, OnInit, Input, HostBinding } from '@angular/core';

import { Product } from '../product/product.model';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnInit {

  @Input()
  product: Product;

  @HostBinding('attr.class') 
  cssClass = 'item';

  constructor() { }

  ngOnInit(): void {
  }

}
