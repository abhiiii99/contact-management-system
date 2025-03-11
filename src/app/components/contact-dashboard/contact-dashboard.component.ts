import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '../search/search.component';
import { ContactService } from '../../services/contact.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from "../contact-list/contact-list.component";
import { CommonConstants } from '../../constants/common.constants';

@Component({
  selector: 'app-contact-dashboard',
  standalone: true,
  imports: [FormsModule, SearchComponent, RouterModule, CommonModule, ContactListComponent],
  templateUrl: './contact-dashboard.component.html',
  styleUrl: './contact-dashboard.component.scss'
})
export class ContactDashboardComponent {

  public sortBy: 'name' | 'phone' = 'name';
  public searchText = signal('');

  public readonly COMMON_CONSTANTS = CommonConstants;

  public contacts = this.contactService.getContacts();
  public filteredContacts = computed(() =>
    this.contacts.filter(
      (contact: { name: string; phone: string | string[]; }) =>
        contact.name.toLowerCase().includes(this.searchText().toLowerCase()) ||
        contact.phone.includes(this.searchText())
    )
  );

  constructor(private contactService: ContactService) { }

  deleteContact(id: number) {
    this.contactService.deleteContact(id);
    this.contacts = this.contactService.getContacts();
  }
}
