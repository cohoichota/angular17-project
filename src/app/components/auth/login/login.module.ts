import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { LoginComponent } from '@app/components/auth/login/components/login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
  ],
  declarations: [LoginComponent],
})
export class LoginModule {}
