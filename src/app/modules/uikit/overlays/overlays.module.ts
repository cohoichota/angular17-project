import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SidebarModule } from 'primeng/sidebar';
import { RippleModule } from 'primeng/ripple';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { OverlaysRoutingModule } from '@app/modules/uikit/overlays/overlays-routing.module';
import { OverlaysComponent } from '@app/modules/uikit/overlays/component/overlays.component';
@NgModule({
  imports: [
    CommonModule,
    OverlaysRoutingModule,
    ToastModule,
    DialogModule,
    FormsModule,
    TooltipModule,
    InputTextModule,
    ButtonModule,
    OverlayPanelModule,
    TableModule,
    ConfirmDialogModule,
    SidebarModule,
    RippleModule,
    ConfirmPopupModule,
  ],
  declarations: [OverlaysComponent],
})
export class OverlaysModule {}
