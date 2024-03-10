import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { LandingRoutingModule } from '@app/components/landing/landing-routing.module';
import { LandingComponent } from '@app/components/landing/component/landing.component';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    DividerModule,
    StyleClassModule,
    ChartModule,
    PanelModule,
    ButtonModule,
  ],
  declarations: [LandingComponent],
})
export class LandingModule {}
