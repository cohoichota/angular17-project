import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppConfigComponent } from '@app/layout/components/config/app.config.component';
import { SidebarModule } from 'primeng/sidebar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';

const PRIMENG_MODULES = [
  SidebarModule,
  RadioButtonModule,
  ButtonModule,
  InputSwitchModule,
];

@NgModule({
  imports: [CommonModule, FormsModule, ...PRIMENG_MODULES],
  declarations: [AppConfigComponent],
  exports: [AppConfigComponent],
})
export class AppConfigModule {}
