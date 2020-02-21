import { Injectable } from '@angular/core';
import { TransactionRequest, Deposit, Withdrawal } from './TransactionRequest';
import { HttpClient } from '@angular/common/http';
import { TransactionResponse } from './TransactionResponse';
import { GeneralResult } from './GeneralResult';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private httpClient:HttpClient) { }

  deposit(request:TransactionRequest<Deposit>){
    return this.httpClient.post<TransactionResponse<GeneralResult>>('http://localhost:44373/Transactions/Deposit',request,{
      headers:{"Content-Type":'application/json'}
    })
  }

  withdrawal(request:TransactionRequest<Withdrawal>){
    return this.httpClient.post<TransactionResponse<GeneralResult>>('http://localhost:44373/Transactions/Withdrawal',request,{
      headers:{"Content-Type":'application/json'}
    })
  }
}