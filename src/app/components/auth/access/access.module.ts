import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AccessRoutingModule } from '@app/components/auth/access/access-routing.module';
import { AccessComponent } from '@app/components/auth/access/components/access.component';

@NgModule({
  imports: [CommonModule, AccessRoutingModule, ButtonModule],
  declarations: [AccessComponent],
})
export class AccessModule {}
