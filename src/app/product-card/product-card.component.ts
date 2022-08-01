import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductServiceService } from '../service/product-service.service';
import { Subject, takeUntil } from 'rxjs';

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

  constructor(private _ProductServiceService: ProductServiceService) {}

  ngOnInit(): void {
    this._ProductServiceService.cartNumber
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((e) => {
        this.arr = e;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  /* ---------------------------------------------------------------- */
  /*                         Fav Product Function                     */
  /* ---------------------------------------------------------------- */

  addFavProduct() {
    let favProduct = this._ProductServiceService.addFavProduct(
      this.favState,
      this.favIcon
    );
    this.favState = favProduct.favState;
    this.favIcon = favProduct.favIcon;
  }

  /* ---------------------------------------------------------------- */
  /*                 Add Product To Cart Function                     */
  /* ---------------------------------------------------------------- */

  addTocart(product: Product) {
    this._ProductServiceService.addTocart(product, this.arr);
  }
}
