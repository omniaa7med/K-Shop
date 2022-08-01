import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductServiceService } from '../service/product-service.service';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product?: Product;
  favIcon: string = '../../assets/img/favorite_border-24px.svg';
  favState: boolean = false;
  arr: Array<Product> = [];
  unsubscribe$ = new Subject<void>();

  constructor(private _ProductServiceService: ProductServiceService) { }

  ngOnInit(): void {
    this._ProductServiceService.cartNumber
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((e) => {
        this.arr = e;
      });
  }

  /* ---------------------------------------------------------------- */
  /*                         Fav Product Function                     */
  /* ---------------------------------------------------------------- */
  addFavProduct() {
    if (this.favState) {
      this.favState = false;
      this.favIcon = '../../assets/img/favorite_border-24px.svg';
    } else {
      this.favState = true;
      this.favIcon = '../../assets/img/favRed.svg';
    }
  }

  addTocart(product: Product) {
    if (product.countIncart) {
      product.countIncart++;
    } else {
      product.countIncart = 1;
    }
    if (this.arr.length > 0) {
      this.arr.map((item: any) => {
        if (item.id !== product.id) {
          this.arr.push(product);
          this.arr = [...new Set(this.arr.map((item: any) => item))];
        }
      });
    } else {
      this.arr.push(product);
    }
    console.log(this.arr)
    this._ProductServiceService.sendCount(this.arr);
  }

}
