import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { FileRoutingModule } from '@app/modules/uikit/file/file-routing.module';
import { FileComponent } from '@app/modules/uikit/file/component/file.component';

@NgModule({
  imports: [CommonModule, FormsModule, FileRoutingModule, FileUploadModule],
  declarations: [FileComponent],
})
export class FileDemoModule {}
