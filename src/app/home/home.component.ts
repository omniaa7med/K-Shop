import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  productList: Product[] = this._ProductServiceService.productList;

  constructor(private _ProductServiceService: ProductServiceService) {
    for (let product = 0; product < this.productList.length; product++) {
      if (product < 4) {
        this.products.push(this.productList[product]);
      }
    }
  }

  ngOnInit(): void {
    this._ProductServiceService.prodSearch.subscribe(x => {
      console.log(x);
      if (x.length > 0) {
        this.products = x
      }
    })
  }
  /* ---------------------------------------------------------------- */
  /*                         Show All Function                        */
  /* ---------------------------------------------------------------- */
  showAll() {
    this.products = this._ProductServiceService.productList;
  }
}
