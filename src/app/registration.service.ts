import { Injectable } from '@angular/core';
import { Customer } from './models/Customer';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() { }

  displayCustomerDetails(customer:Customer){
      console.log(customer);
      alert(customer.custName + "  "
      +customer.custEmail+"   "+customer.custMobile+"   "+customer.custPassword);
  }
}
