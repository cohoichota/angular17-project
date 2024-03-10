import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FloatLabelComponent } from '@app/modules/uikit/floatlabel/component/floatlabel.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: FloatLabelComponent }]),
  ],
  exports: [RouterModule],
})
export class FloatLabelRoutingModule {}
