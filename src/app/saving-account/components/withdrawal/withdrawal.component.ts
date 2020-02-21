import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransactionsService } from '../../transactions.service';
import { ToolbarService } from '../../toolbar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.css']
})
export class WithdrawalComponent implements OnInit, OnDestroy {

  withdrawalForm: FormGroup;
  responseMsg: string;
  errorMsg: string;
  rootsubscription: Subscription;

  constructor(private transactionsService: TransactionsService, toolbarService: ToolbarService) {
    this.withdrawalForm = new FormGroup({
      account: new FormControl('', [Validators.required, Validators.pattern(/^01\d{9}$/)]),
      amount: new FormControl('', [Validators.required, Validators.pattern(/^\d+(.\d{1,})?$/), Validators.min(10.00)])
    });

    this.rootsubscription = toolbarService.submit$.subscribe(submit => { this.submit(); });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    if (this.rootsubscription && !this.rootsubscription.closed) {
      this.rootsubscription.unsubscribe();
    }
  }

  submit() {
    if (this.withdrawalForm.valid) {
      this.transactionsService.withdrawal({
        tranCode: '0002',
        body: {
          account: this.withdrawalForm.controls.account.value,
          amount: this.withdrawalForm.controls.amount.value
        }
      }).pipe().subscribe(HttpRequest => { this.responseMsg = HttpRequest.response.result; },
        (error: HttpErrorResponse) => {
          this.errorMsg = error.message;
          console.log(`An error ocurred ${error.message}`)
        });
    }
  }

  hasError(control: string, errorCode: string) {
    return this.withdrawalForm.get(control).hasError(errorCode);
  }

}
