import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyRoutingModule } from '@app/modules/pages/empty/empty-routing.module';
import { EmptyComponent } from '@app/modules/pages/empty/component/empty.component';

@NgModule({
  imports: [CommonModule, EmptyRoutingModule],
  declarations: [EmptyComponent],
})
export class EmptyModule {}
