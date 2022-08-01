import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product?: Product;
  stars: Array<number> = [1, 2, 3, 4, 5]
  proStar: Array<object> =[]
  constructor() {

  }

  ngOnInit(): void {


  }


}
