import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipModule } from 'primeng/chip';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { TooltipModule } from 'primeng/tooltip';
import { PrimeBlocksRoutingModule } from '@app/modules/primeblocks/primeblocks-routing.module';
import { BlockViewerComponent } from '@app/modules/primeblocks/components/blockview/blockview.component';
import { BlocksComponent } from '@app/modules/primeblocks/components/blocks/block.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    ChipModule,
    CheckboxModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    TooltipModule,
    PrimeBlocksRoutingModule,
  ],
  declarations: [BlocksComponent, BlockViewerComponent],
})
export class PrimeBlocksModule {}
