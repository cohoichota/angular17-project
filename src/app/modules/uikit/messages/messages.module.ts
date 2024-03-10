import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesRoutingModule } from '@app/modules/uikit/messages/messages-routing.module';
import { MessagesComponent } from '@app/modules/uikit/messages/component/messages.component';

@NgModule({
  imports: [
    CommonModule,
    MessagesRoutingModule,
    MessagesModule,
    MessageModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
  ],
  declarations: [MessagesComponent],
})
export class MessagesDemoModule {}
