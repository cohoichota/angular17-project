import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ErrorComponent } from '@app/components/auth/error/components/error.component';
import { ErrorRoutingModule } from '@app/components/auth/error/error-routing.module';

@NgModule({
  imports: [CommonModule, ErrorRoutingModule, ButtonModule],
  declarations: [ErrorComponent],
})
export class ErrorModule {}
