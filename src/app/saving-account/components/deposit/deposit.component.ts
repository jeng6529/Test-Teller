import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransactionsService } from '../../transactions.service';
import { ToolbarService } from '../../toolbar.service';
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  depositForm: FormGroup;
  responseMsg: string;
  errorMsg: string;
  constructor(private transactionsService: TransactionsService, toolbarService: ToolbarService) {
    this.depositForm = new FormGroup({
      account: new FormControl('', [Validators.required, Validators.pattern(/^0\d{9}$/)]),
      amount: new FormControl('', [Validators.required, Validators.pattern(/^\d+(.\d{1,})?$/), Validators.min(10.00)])
    });

    this.depositForm.valueChanges.subscribe(value => toolbarService.setValidity(this.depositForm.valid));

    toolbarService.submit$.subscribe(submit => {
      if (this.depositForm.valid) {
        this.transactionsService.deposit({
          tranCode: '0001',
          body: {
            account: this.depositForm.controls.account.value,
            amount: this.depositForm.controls.amount.value
          }
        }).pipe(
          //catchError(error => { console.log(`An error ocurred ${error.message}`); return empty; })
        )
          .subscribe(httpRequest => { this.responseMsg = httpRequest.response.result; },
            (error: HttpErrorResponse) => {
              this.errorMsg = error.message;
              console.log(`An error ocurred ${error.message}`)
            });
      }
    });
  }

  ngOnInit() {

  }

  submit() {

  }

  hasError(control: string, errorCode: string) {
    return this.depositForm.get(control).hasError(errorCode);
  }

}
