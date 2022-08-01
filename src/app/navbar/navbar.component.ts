import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  count?: number

  constructor(private _ProductServiceService: ProductServiceService) {
    this._ProductServiceService.cartNumber.subscribe(count => {
      this.count = count.map((item: any) => { return item.countIncart }).reduce((a, b) => a + b, 0)
    })
  }

  ngOnInit(): void {
  }

}
