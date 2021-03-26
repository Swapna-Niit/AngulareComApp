import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product : Product;
  constructor(
    private productService : ProductService,
    private location : Location,
    private activatedRoute : ActivatedRoute

  ) { }

  ngOnInit(): void {
    let pid:number = Number(this.activatedRoute.snapshot.
      paramMap.get('prodid'));
    //alert("selected product = "+pid);
    this.productService.getProductById(pid).subscribe(
      product=> this.product = product
    );
  }

  goBack() {
    this.location.back();
  }

}
