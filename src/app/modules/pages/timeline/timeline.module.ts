import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TimelineRoutingModule } from '@app/modules/pages/timeline/timeline-routing.module';
import { TimelineComponent } from '@app/modules/pages/timeline/component/timeline.component';

@NgModule({
  imports: [
    CommonModule,
    TimelineModule,
    ButtonModule,
    CardModule,
    TimelineRoutingModule,
  ],
  declarations: [TimelineComponent],
})
export class TimelineDemoModule {}
