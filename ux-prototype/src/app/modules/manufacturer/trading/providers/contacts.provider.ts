// Copyright (c) Crown Copyright (Department for Energy Security and Net Zero). Licensed under The MIT License (MIT).  See License file in the project root for license information.
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { CONTACTS } from '../test-data/contacts.data';

@Injectable({
  providedIn: 'root',
})
export class ContactsProvider {
  private readonly contacts = new BehaviorSubject<Contact[]>(CONTACTS);
  public readonly contacts$ = this.contacts.asObservable();
}
