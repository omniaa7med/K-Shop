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

  constructor(private _ProductServiceService: ProductServiceService) { }

  ngOnInit(): void {
    this.products = this._ProductServiceService.productList
  }
}
