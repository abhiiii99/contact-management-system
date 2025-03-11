import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-make-payment',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './make-payment.component.html',
  styleUrl: './make-payment.component.scss'
})
export class MakePaymentComponent {
  public step: number = 1;
  public paymentMethod: string = '';
  public showDetails: boolean = false;
  public showPaymentDetails: boolean = false;
  public showSuccessMsg: boolean = false;

  public cardForm: FormGroup = new FormGroup({
    cardNumber: new FormControl('', Validators.compose([Validators.required, Validators.minLength(14), Validators.maxLength(16)])),
    expiry: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(5)])),
    cvv: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(3)]))
  });

  public upiId = new FormControl('', Validators.required);
  public netBanking = new FormControl('', Validators.required);
  public wallet = new FormControl('', Validators.required);

  constructor(private router: Router) { }

  selectPayment(method: string) {
    this.paymentMethod = method;
    this.showPaymentDetails = true;
    this.cardForm.reset();
    this.upiId.setValue('');
    this.netBanking.setValue('');
    this.wallet.setValue('');
  }

  confirmPayment() {
    this.showSuccessMsg = true;
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1000);
  }

  public isButtonDisabled(): boolean {
    if (!this.cardForm.valid && this.upiId.value === '' && this.netBanking.value === '' && this.wallet.value === '') {
      return true;
    }
    return false;
  }
}
