import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TreeComponent } from '@app/modules/uikit/tree/component/tree.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: TreeComponent }])],
  exports: [RouterModule],
})
export class TreeRoutingModule {}
