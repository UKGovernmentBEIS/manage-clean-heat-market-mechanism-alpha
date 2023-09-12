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
