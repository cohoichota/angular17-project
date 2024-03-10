import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { TreeRoutingModule } from '@app/modules/uikit/tree/tree-routing.module';
import { TreeComponent } from '@app/modules/uikit/tree/component/tree.component';

@NgModule({
  imports: [
    CommonModule,
    TreeRoutingModule,
    FormsModule,
    TreeModule,
    TreeTableModule,
  ],
  declarations: [TreeComponent],
})
export class TreeDemoModule {}
