import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlocksComponent } from '@app/modules/primeblocks/components/blocks/block.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: BlocksComponent }])],
  exports: [RouterModule],
})
export class PrimeBlocksRoutingModule {}
