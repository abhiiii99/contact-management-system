import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDashboardComponent } from './contact-dashboard.component';
import { RouterModule } from '@angular/router';

describe('ContactDashboardComponent', () => {
  let component: ContactDashboardComponent;
  let fixture: ComponentFixture<ContactDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactDashboardComponent, RouterModule.forRoot([])]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
