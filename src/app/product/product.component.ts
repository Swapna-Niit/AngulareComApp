
import { Component, Input, OnInit, Output,
  EventEmitter } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product:Product;//product property of type Product
  @Output() removed = new EventEmitter<Product>();
 constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.removed.emit(this.product);
    console.log(this.removed);
    console.log(this.product);
  }

}
