import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Contact } from '../../models/contact.model';
import { CommonConstants } from '../../constants/common.constants';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent {

  @Input() searchText: string = '';
  @Input() contacts: Contact[] = [];
  @Input() sortBy: 'name' | 'phone' = 'name';

  @Output() deleteContact = new EventEmitter<number>();

  public readonly COMMON_CONSTANTS = CommonConstants;

  public filteredContacts: Contact[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.filteredContacts = this.contacts.filter(
      (contact: { name: string; phone: string | string[]; }) =>
        contact.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        contact.phone.includes(this.searchText)
    );
    this.sortContacts();
  }

  sortContacts() {
    this.filteredContacts.sort((a, b) => {
      if (a[this.sortBy] < b[this.sortBy]) return -1;
      if (a[this.sortBy] > b[this.sortBy]) return 1;
      return 0;
    });
  }

  deleteContactById(id: number) {
    this.deleteContact.emit(id);
  }
}