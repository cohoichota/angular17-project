import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MiscComponent } from '@app/modules/uikit/misc/component/misc.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: MiscComponent }])],
  exports: [RouterModule],
})
export class MiscRoutingModule {}
