import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '@app/components/auth/login/components/login.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: LoginComponent }])],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
