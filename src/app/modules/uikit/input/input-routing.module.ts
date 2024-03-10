import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InputComponent } from '@app/modules/uikit/input/component/input.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: InputComponent }])],
  exports: [RouterModule],
})
export class InputRoutingModule {}
