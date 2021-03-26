import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockData } from './mock-product-data';
import { Product } from './models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];

  constructor(private httpClient:HttpClient) { 
    ///this.products = MockData.Products;
  }

  getProducts() :Observable<any> {
    return this.httpClient.get("http://localhost:8080/MLP312/api/product");
  }

 /*  deleteProduct(product : Product) {
    let idx = this.products.indexOf(product);
    if(idx !== -1){
      this.products.splice(idx,1);
    }
  } */

  addProduct(product : Product):Observable<Object> {
    //this.products.push(product);
    return this.httpClient.post("http://localhost:8080/MLP312/api/product/addProduct",product);
  }

  getProductById(pid : number):Observable<any> {
    //return of(this.products.find(p => p.id === pid));
    return this.httpClient.get("http://localhost:8080/MLP312/api/product/productById/${pid}");
  }

  updateProduct(product : Product):Observable<any> {
    //return of(this.products.find(p => p.id === pid));
    return this.httpClient.put("http://localhost:8080/MLP312/api/product/updateProduct",product);
  }

  deleteProduct(pid : number):Observable<any> {
    //return of(this.products.find(p => p.id === pid));
    return this.httpClient.delete("http://localhost:8080/MLP312/api/product/productById/${pid}");
  }

}
