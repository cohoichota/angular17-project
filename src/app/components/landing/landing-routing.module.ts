import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingComponent } from '@app/components/landing/component/landing.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: LandingComponent }])],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
