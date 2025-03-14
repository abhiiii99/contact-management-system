import { Routes } from '@angular/router';
import { AddEditContactComponent } from './components/add-edit-contact/add-edit-contact.component';
import { ContactDashboardComponent } from './components/contact-dashboard/contact-dashboard.component';
import { canDeactivateGuard } from './guards/can-deactivate.guard';
import { MakePaymentComponent } from './components/make-payment/make-payment.component';

export const routes: Routes = [
    { path: '', component: ContactDashboardComponent },
    { path: 'add', component: AddEditContactComponent, canDeactivate: [canDeactivateGuard] },
    { path: 'edit/:id', component: AddEditContactComponent, canDeactivate: [canDeactivateGuard] },
    { path: 'payment', component: MakePaymentComponent }
];
