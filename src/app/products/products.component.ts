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
      
      console.log(this.products);
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => this.products = products
    );
  }
  
deleteProduct(product:Product) {
  this.productService.deleteProduct(product);
  //after deleting this line updates the products array
   this.productService.getProducts().subscribe(
    products => this.products = products
  );
}


}
