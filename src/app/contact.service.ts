import { Injectable } from '@angular/core';
import { Contact } from './models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  displayDetails(contact: Contact) {
    alert(contact);
    console.log(contact);
  }

  constructor() { }
}
