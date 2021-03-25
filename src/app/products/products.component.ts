import { Component, OnInit } from '@angular/core';
import { MockData } from '../mock-product-data';
import { Product } from '../models/product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  //creating an product array
  products : Product [] = [];
  constructor(public productService:ProductService) { 
      this.products = productService.getProducts();
      console.log(this.products);
  }
  ngOnInit(): void {
  }
  
deleteProduct(product:Product) {
  this.productService.deleteProduct(product);
  //after deleting this line updates the products array
  this.products = this.productService.getProducts();
}


}
