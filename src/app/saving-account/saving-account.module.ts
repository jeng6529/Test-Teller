import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { DepositComponent } from './components/deposit/deposit.component';
import { TransactionsService } from './transactions.service';
import { HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [DepositComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[DepositComponent],
  providers:[TransactionsService]
})
export class SavingAccountModule { }
