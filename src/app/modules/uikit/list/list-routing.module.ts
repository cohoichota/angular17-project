import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListComponent } from '@app/modules/uikit/list/component/list.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: ListComponent }])],
  exports: [RouterModule],
})
export class ListRoutingModule {}
