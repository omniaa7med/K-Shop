import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
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

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
