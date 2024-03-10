import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { PickListModule } from 'primeng/picklist';
import { OrderListModule } from 'primeng/orderlist';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { ListComponent } from '@app/modules/uikit/list/component/list.component';
import { ListRoutingModule } from '@app/modules/uikit/list/list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ListRoutingModule,
    DataViewModule,
    PickListModule,
    OrderListModule,
    InputTextModule,
    DropdownModule,
    RatingModule,
    ButtonModule,
  ],
  declarations: [ListComponent],
})
export class ListModule {}
