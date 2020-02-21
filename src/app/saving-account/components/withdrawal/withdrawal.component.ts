import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransactionsService } from '../../transactions.service';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.css']
})
export class WithdrawalComponent implements OnInit {

  withdrawalForm : FormGroup;
  responseMsg : string;
  constructor(private transactionsService : TransactionsService) { 
    this.withdrawalForm = new FormGroup({
      account : new FormControl('',[Validators.required,Validators.pattern(/^01\d{9}$/)]),
      amount : new FormControl('',[Validators.required,Validators.pattern(/^\d+(.\d{1,})?$/),Validators.min(10.00)])
    });
  }

  ngOnInit(){

  }

  submit(){
    if(this.withdrawalForm.valid){
      this.transactionsService.withdrawal({
        tranCode:'0002',
        body:{
          account:this.withdrawalForm.controls.account.value,
          amount:this.withdrawalForm.controls.amount.value
        }
      }).pipe().subscribe((HttpRequest => this.responseMsg = HttpRequest.response.result));
    }
  }

  hasError(control:string,errorCode:string){
    return this.withdrawalForm.get(control).hasError(errorCode);
  }

}
