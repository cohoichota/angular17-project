import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FileComponent } from '@app/modules/uikit/file/component/file.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: FileComponent }])],
  exports: [RouterModule],
})
export class FileRoutingModule {}
