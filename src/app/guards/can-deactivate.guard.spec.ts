import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { canDeactivateGuard } from './can-deactivate.guard';
import { AddEditContactComponent } from '../components/add-edit-contact/add-edit-contact.component';

describe('canDeactivateGuard', () => {
  const executeGuard: CanDeactivateFn<AddEditContactComponent> = (component, currentRoute, currentState, nextState) => 
    TestBed.runInInjectionContext(() => canDeactivateGuard(component, currentRoute, currentState, nextState));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
