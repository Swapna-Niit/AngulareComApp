import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/Customer';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  customer:Customer = new Customer();
  formSubmitted = false;

  constructor(private regService:RegistrationService) { }

  ngOnInit(): void {
  }

  displayCustomerDetails() {
    this.regService.displayCustomerDetails(this.customer);
  }

}
