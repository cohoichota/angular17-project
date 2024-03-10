import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmptyComponent } from '@app/modules/pages/empty/component/empty.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: EmptyComponent }])],
  exports: [RouterModule],
})
export class EmptyRoutingModule {}
