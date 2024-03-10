import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfirmationComponent } from '@app/modules/uikit/menus/component/confirmation/confirmation.component';
import { MenusComponent } from '@app/modules/uikit/menus/component/menus/menus.component';
import { PaymentComponent } from '@app/modules/uikit/menus/component/payment/payment.component';
import { PersonalComponent } from '@app/modules/uikit/menus/component/personal/personal.component';
import { SeatComponent } from '@app/modules/uikit/menus/component/seat/seat.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MenusComponent,
        children: [
          { path: '', redirectTo: 'personal', pathMatch: 'full' },
          { path: 'personal', component: PersonalComponent },
          { path: 'confirmation', component: ConfirmationComponent },
          { path: 'seat', component: SeatComponent },
          { path: 'payment', component: PaymentComponent },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class MenusRoutingModule {}
