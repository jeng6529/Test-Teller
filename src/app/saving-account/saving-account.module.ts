import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { DepositComponent } from './components/deposit/deposit.component';
import { TransactionsService } from './transactions.service';
import { HttpClientModule } from '@angular/common/http';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarService } from './toolbar.service';

const routes: Routes = [
  {
    path: 'saving-account',
    component:LayoutComponent,
    children: [
      { path: 'deposit', component: DepositComponent },
      { path: 'withdrawal', component: WithdrawalComponent }]
  }

];

@NgModule({
  declarations: [DepositComponent, WithdrawalComponent, LayoutComponent, ToolbarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [DepositComponent, WithdrawalComponent],
  providers: [TransactionsService,ToolbarService]
})
export class SavingAccountModule { }
