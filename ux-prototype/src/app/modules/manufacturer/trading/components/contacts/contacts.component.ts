// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
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
