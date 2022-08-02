import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../interfaces/product';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  count?: number;
  unsubscribe$ = new Subject<void>();

  constructor(private _ProductServiceService: ProductServiceService) {
    this._ProductServiceService.cartNumber.subscribe((count) => {
      this.count = count
        .map((item: any) => {
          return item.countIncart;
        })
        .reduce((a, b) => a + b, 0);
    });
  }

  ngOnInit(): void { }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  searchProduct(e: any) {
    console.log(e.target.value);
    if(e.target.value != ''){
      let Arr: Array<Product> = []
      let arr = this._ProductServiceService.productList
      arr.filter(x => {
        console.log(x.name.search(e.target.name));
        if (x.name === e.target.value) {
          Arr.push(x)
        } else {
          Arr = []
        }

      })
      this._ProductServiceService.sendProductSearch(Arr);
    }else{
      this._ProductServiceService.sendProductSearch(this._ProductServiceService.productList);

    }

  }
}
