import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableComponent } from '@app/modules/uikit/table/component/table.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: TableComponent }])],
  exports: [RouterModule],
})
export class TableRoutingModule {}
