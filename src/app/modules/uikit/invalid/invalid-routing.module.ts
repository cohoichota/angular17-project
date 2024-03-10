import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InvalidComponent } from '@app/modules/uikit/invalid/component/invalid.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: InvalidComponent }])],
  exports: [RouterModule],
})
export class InvalidRoutingModule {}
