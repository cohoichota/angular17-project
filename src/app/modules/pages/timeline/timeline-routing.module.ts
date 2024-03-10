import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TimelineComponent } from '@app/modules/pages/timeline/component/timeline.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: TimelineComponent }]),
  ],
  exports: [RouterModule],
})
export class TimelineRoutingModule {}
