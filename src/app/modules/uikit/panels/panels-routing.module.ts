import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PanelsComponent } from '@app/modules/uikit/panels/component/panels.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: PanelsComponent }])],
  exports: [RouterModule],
})
export class PanelsRoutingModule {}
