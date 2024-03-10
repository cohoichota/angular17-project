import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DocumentationComponent } from '@app/modules/documentation/component/documentation.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: DocumentationComponent }]),
  ],
  exports: [RouterModule],
})
export class DocumentationRoutingModule {}
