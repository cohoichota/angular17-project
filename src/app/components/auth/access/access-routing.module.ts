import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccessComponent } from '@app/components/auth/access/components/access.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: AccessComponent }])],
  exports: [RouterModule],
})
export class AccessRoutingModule {}
