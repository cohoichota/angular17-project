import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverlaysComponent } from '@app/modules/uikit/overlays/component/overlays.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: OverlaysComponent }]),
  ],
  exports: [RouterModule],
})
export class OverlaysRoutingModule {}
