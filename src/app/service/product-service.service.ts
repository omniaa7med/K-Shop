import { Product } from './../interfaces/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor() {}
  productList: Product[] = [
    {
      id: 1,
      name: 'تيشيرت-كم طويل-آرت وير-نسائي',
      price: 90,
      imageUrl: '../../assets/img/1.png',
      offer: 150,
      star: [true,true,false,false,false],
      visit: false,
    },
    {
      id: 2,
      name: 'تيشيرت-كم طويل-آرت وير-نسائي',
      price: 90,
      imageUrl: '../../assets/img/2.png',
      star: [true,true,true,false,false],
      visit: false,
    },
    {
      id: 3,
      name: 'تيشيرت-كم طويل-آرت وير-نسائي',
      price: 90,
      imageUrl: '../../assets/img/3.png',
      star: [true,true,false,false,false],
      visit: false,
    },
    {
      id: 4,
      name: 'تيشيرت-كم طويل-آرت وير-نسائي',
      price: 90,
      imageUrl: '../../assets/img/4.png',
      visit: false,
      star: [true,true,false,false,false],
    },
    {
      id: 5,
      name: 'تيشيرت-كم طويل-آرت وير-نسائي',
      price: 90,
      imageUrl: '../../assets/img/5.png',
      star: [true,true,false,false,false],
      visit: true,
    },
    {
      id: 6,
      name: 'تيشيرت-كم طويل-آرت وير-نسائي',
      price: 90,
      imageUrl: '../../assets/img/6.png',
      offer: 150,
      star: [true,true,false,false,false],
      visit: true,
    },
    {
      id: 7,
      name: 'تيشيرت-كم طويل-آرت وير-نسائي',
      price: 90,
      imageUrl: '../../assets/img/7.png',
      visit: true,
      star: [true,true,false,false,false],
    },
  ];
}
