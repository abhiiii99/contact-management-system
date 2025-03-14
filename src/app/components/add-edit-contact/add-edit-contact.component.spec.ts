import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditContactComponent } from './add-edit-contact.component';
import { RouterModule } from '@angular/router';

describe('AddEditContactComponent', () => {
  let component: AddEditContactComponent;
  let fixture: ComponentFixture<AddEditContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditContactComponent, RouterModule.forRoot([])]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
