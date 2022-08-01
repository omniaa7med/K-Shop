import { Product } from './../interfaces/product';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor() {}
  productArr: Array<Product> = [];

  private cart = new BehaviorSubject(this.productArr);
  cartNumber = this.cart.asObservable();
  productList: Product[] = [
    {
      id: 1,
      name: 'تيشيرت-كم طويل-آرت وير-نسائي',
      price: 90,
      imageUrl: '../../assets/img/1.png',
      offer: 150,
      star: [true, true, false, false, false],
      visit: false,
    },
    {
      id: 2,
      name: 'تيشيرت-كم طويل-آرت وير-نسائي',
      price: 90,
      imageUrl: '../../assets/img/2.png',
      star: [true, true, true, false, false],
      visit: false,
    },
    {
      id: 3,
      name: 'تيشيرت-كم طويل-آرت وير-نسائي',
      price: 90,
      imageUrl: '../../assets/img/3.png',
      star: [true, true, false, false, false],
      visit: false,
    },
    {
      id: 4,
      name: 'تيشيرت-كم طويل-آرت وير-نسائي',
      price: 90,
      imageUrl: '../../assets/img/4.png',
      visit: false,
      star: [true, true, false, false, false],
    },
    {
      id: 5,
      name: 'تيشيرت-كم طويل-آرت وير-نسائي',
      price: 90,
      imageUrl: '../../assets/img/5.png',
      star: [true, true, false, false, false],
      visit: true,
    },
    {
      id: 6,
      name: 'تيشيرت-كم طويل-آرت وير-نسائي',
      price: 90,
      imageUrl: '../../assets/img/6.png',
      offer: 150,
      star: [true, true, false, false, false],
      visit: true,
    },
    {
      id: 7,
      name: 'تيشيرت-كم طويل-آرت وير-نسائي',
      price: 150,
      imageUrl: '../../assets/img/6.png',
      star: [true, true, false, false, false],
      visit: false,
    },
    {
      id: 8,
      name: 'تيشيرت-كم طويل-آرت وير-نسائي',
      price: 90,
      imageUrl: '../../assets/img/7.png',
      visit: true,
      star: [true, true, false, false, false],
    },
  ];

  sendCount(type: any) {
    this.cart.next(type);
  }

  /* ---------------------------------------------------------------- */
  /*                         Fav Product Function                     */
  /* ---------------------------------------------------------------- */

  addFavProduct(favState: boolean, favIcon: string) {
    if (favState) {
      return {
        favState: false,
        favIcon: '../../assets/img/favorite_border-24px.svg',
      };
    } else {
      return { favState: true, favIcon: '../../assets/img/favRed.svg' };
    }
  }

  /* ---------------------------------------------------------------- */
  /*                 Add Product To Cart Function                     */
  /* ---------------------------------------------------------------- */

  addTocart(product: Product, arr: Array<Product>) {
    if (product.countIncart) {
      product.countIncart++;
    } else {
      product.countIncart = 1;
    }
    if (arr.length > 0) {
      arr.map((item: any) => {
        if (item.id !== product.id) {
          arr.push(product);
          arr = [...new Set(arr.map((item: any) => item))];
        }
      });
    } else {
      arr.push(product);
    }
    console.log(arr);
    this.sendCount(arr);
  }
}
