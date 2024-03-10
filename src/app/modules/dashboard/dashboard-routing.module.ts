import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '@app/modules/dashboard/components/dashboard/dashboard.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: DashboardComponent }]),
  ],
  exports: [RouterModule],
})
export class DashboardsRoutingModule {}
