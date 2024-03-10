import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from '@app/modules/documentation/component/documentation.component';

@NgModule({
  imports: [CommonModule, DocumentationRoutingModule],
  declarations: [DocumentationComponent],
})
export class DocumentationModule {}
