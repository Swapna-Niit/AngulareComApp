import { Injectable } from '@angular/core';
import { MockData } from './mock-product-data';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];

  constructor() { 
    this.products = MockData.Products;
  }

  getProducts() : Product [] {
    return this.products;
  }

  deleteProduct(product : Product) {
    let idx = this.products.indexOf(product);
    if(idx !== -1){
      this.products.splice(idx,1);
    }
  }

  addProduct(product : Product) {
    this.products.push(product);
  }

  getProductById(pid : number) {
    return this.products.find(p => p.id === pid);
  }
}
