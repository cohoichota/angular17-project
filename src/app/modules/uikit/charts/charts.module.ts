import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { ChartsRoutingModule } from '@app/modules/uikit/charts/charts-routing.module';
import { ChartsComponent } from '@app/modules/uikit/charts/component/charts.component';

@NgModule({
  imports: [CommonModule, ChartsRoutingModule, ChartModule],
  declarations: [ChartsComponent],
})
export class ChartsDemoModule {}
