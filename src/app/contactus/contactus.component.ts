import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactForm: FormGroup;

  email:FormControl;
  mobileNo : FormControl;
  comments:FormControl;

  formSubmitted=false;

  constructor(private contactService:ContactService) { }

 

  ngOnInit(): void {

    this.email = new FormControl();
    this.mobileNo = new FormControl();
    this.comments = new FormControl();
 

  this.contactForm = new FormGroup({
    'email' : this.email,
    'mobileNo' : this.mobileNo,
    'comments' : this.comments
  });

}
  displayDetails(contact:Contact) {
    this.contactService.displayDetails(contact);
    this.formSubmitted = true;
  }
}
