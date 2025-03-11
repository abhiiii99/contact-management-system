import { Injectable, signal } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  private contacts = signal<Contact[]>([]);
  private readonly CONTACTS = 'contacts';

  constructor() {
    const contacts = localStorage.getItem(this.CONTACTS);
    if (contacts) {
      this.contacts.set(JSON.parse(contacts) as Contact[]);
    }
  }

  public getContacts(): Contact[] {
    return this.contacts();
  }

  public addContact(contact: Contact): void {
    this.contacts.update((contacts) => [...contacts, contact]);
    localStorage.setItem(this.CONTACTS, JSON.stringify(this.contacts()));
  }

  public updateContact(updatedContact: Contact): void {
    this.contacts.update((contacts) =>
      contacts.map((contact) => (contact.id === updatedContact.id ? updatedContact : contact))
    );
    localStorage.setItem(this.CONTACTS, JSON.stringify(this.contacts()));
  }

  public deleteContact(id: number): void {
    this.contacts.update((contacts) => contacts.filter((contact) => contact.id !== id));
    localStorage.setItem(this.CONTACTS, JSON.stringify(this.contacts()));
  }

  public getContactById(id: number): Contact | undefined {
    return this.contacts().find((contact) => contact.id === id);
  }
}