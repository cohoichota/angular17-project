import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MediaComponent } from '@app/modules/uikit/media/component/media.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: MediaComponent }])],
  exports: [RouterModule],
})
export class MediaRoutingModule {}
