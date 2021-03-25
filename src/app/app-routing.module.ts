import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductModelComponent } from './add-product-model/add-product-model.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'add-product-form',component:AddProductModelComponent},
  {path:'contactus-form',component:ContactusComponent},
  {path:'add-customer-form',component:RegistrationComponent},
  {path:'products/:prodid',component:ProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
