import { CanDeactivateFn } from '@angular/router';
import { AddEditContactComponent } from '../components/add-edit-contact/add-edit-contact.component';

export const canDeactivateGuard: CanDeactivateFn<AddEditContactComponent> = (component, currentRoute, currentState, nextState) => {
  if (component.contactForm.dirty && !component.contactForm.valid) {
    return confirm('You have unsaved changes. Are you sure you want to leave this page?');
  }
  return true;
};
