import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { UtilitiesRoutingModule } from '@app/modules/utilities/utilities-routing.module';
import { IconsComponent } from '@app/modules/utilities/component/icons.component';

@NgModule({
  imports: [CommonModule, UtilitiesRoutingModule, InputTextModule],
  declarations: [IconsComponent],
})
export class UtilitiesModule {}
