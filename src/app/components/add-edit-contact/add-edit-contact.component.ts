import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonConstants } from '../../constants/common.constants';

@Component({
  selector: 'app-add-edit-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './add-edit-contact.component.html',
  styleUrl: './add-edit-contact.component.scss'
})
export class AddEditContactComponent {

  public contact = signal<Contact>({ id: 0, name: '', email: '', phone: '' });
  public isEditMode = signal(false);

  public readonly COMMON_CONSTANTS = CommonConstants;

  public contactForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    phone: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(10)]))
  });

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      const existingContact = this.contactService.getContactById(id);
      if (existingContact) {
        this.contact.set({ ...existingContact });
        this.isEditMode.set(true);
        this.contactForm.setValue({
          name: existingContact.name,
          email: existingContact.email,
          phone: existingContact.phone
        });
      }
    }
  }

  public saveContact(): void {
    if (this.isEditMode()) {
      this.contactService.updateContact(this.contact());
    } else {
      this.contactService.addContact({ ...this.contact(), id: Date.now() });
    }
    this.router.navigate(['/']);
  }

  public cancel(): void {
    this.router.navigate(['/']);
  }
}