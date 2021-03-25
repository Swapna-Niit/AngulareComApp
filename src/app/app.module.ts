import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { AddProductModelComponent } from './add-product-model/add-product-model.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ContactService } from './contact.service';
import { RegistrationComponent } from './registration/registration.component';
import { LayoutModule } from './layout/layout.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    AddProductModelComponent,
    ContactusComponent,
    RegistrationComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  providers: [
    ProductService,
    ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
