import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product-model',
  templateUrl: './add-product-model.component.html',
  styleUrls: ['./add-product-model.component.css']
})
export class AddProductModelComponent implements OnInit {

  productTypes = ['Staples','Ready To Cook','Pulses'];

  addProductForm: FormGroup;

  id:FormControl;
  title:FormControl;
  type:FormControl;
  weight:FormControl;
  productType:FormControl;
  brand:FormControl;
  price:FormControl;

  formSubmitted=false;
  constructor(private productService:ProductService,
    private router:Router) { }

  //initializes the form control
  ngOnInit(): void {
    this.id = new FormControl('',Validators.required);//adding validators to each Form Control Object
    this.title=new FormControl('',[Validators.required,Validators.minLength(5)]);
    this.type=new FormControl('',[Validators.required,Validators.minLength(5)]);
    this.weight=new FormControl('',Validators.required);
    this.productType=new FormControl('',Validators.required);
    this.brand=new FormControl('',Validators.required);
    this.price=new FormControl('',[Validators.required,
                                    Validators.minLength(1),
                                    Validators.pattern('[0-9]')]);
 
                                    
    //reading values from the form and create a Json Object of type Product(addProductForm)
    this.addProductForm = new FormGroup({
      'id': this.id,
      'title':this.title,
      'type': this.type,
      'weight':  this.weight,
      'productType': this.productType,
      'brand':this.brand,
      'price':this.price
    });
  }

  addProduct(product:Product) {
    this.productService.addProduct(product);
    this.formSubmitted = true;
    this.router.navigateByUrl('/products');
  }
}
