import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-visit-product-card',
  templateUrl: './visit-product-card.component.html',
  styleUrls: ['./visit-product-card.component.scss']
})
export class VisitProductCardComponent implements OnInit {
  @Input() product?: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
