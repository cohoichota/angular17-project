import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@app/modules/uikit/button/component/button.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: ButtonComponent }])],
  exports: [RouterModule],
})
export class ButtonRoutingModule {}
