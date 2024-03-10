import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ButtonRoutingModule } from '@app/modules/uikit/button/button-routing.module';
import { ButtonComponent } from '@app/modules/uikit/button/component/button.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonRoutingModule,
    ButtonModule,
    RippleModule,
    SplitButtonModule,
    ToggleButtonModule,
  ],
  declarations: [ButtonComponent],
})
export class ButtonDemoModule {}
