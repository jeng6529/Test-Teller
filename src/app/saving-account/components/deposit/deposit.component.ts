import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransactionsService } from '../../transactions.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  depositForm : FormGroup;
  responseMsg : string;
  constructor(private transactionsService : TransactionsService) { 
    this.depositForm = new FormGroup({
      account : new FormControl('',[Validators.required,Validators.pattern(/^0\d{10}$/)]),
      amount : new FormControl('',[Validators.required,Validators.pattern(/^\d+(.\d{1,})?$/),Validators.min(10.00)])
    });
  }

  ngOnInit(){

  }

  submit(){
    if(this.depositForm.valid){
      this.transactionsService.deposit({
        tranCode:'0001',
        body:{
          account:this.depositForm.controls.account.value,
          amount:this.depositForm.controls.amount.value
        }
      }).pipe().subscribe((HttpRequest => this.responseMsg = HttpRequest.response.result));
    }
  }

  hasError(control:string,errorCode:string){
    return this.depositForm.get(control).hasError(errorCode);
  }

}
