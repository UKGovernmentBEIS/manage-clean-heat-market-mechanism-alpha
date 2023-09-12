import { Component } from '@angular/core';
import { ContactsProvider } from '../../providers/contacts.provider';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact';

@Component({
  selector: 'trading-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent {
  public readonly contacts$: Observable<Contact[]>;
  
  public constructor(contactsProvider: ContactsProvider) {
    this.contacts$ = contactsProvider.contacts$;
  }
}
