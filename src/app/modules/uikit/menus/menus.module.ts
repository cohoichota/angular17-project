import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { StepsModule } from 'primeng/steps';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { InputTextModule } from 'primeng/inputtext';
import { MenusRoutingModule } from '@app/modules/uikit/menus/menus-routing.module';
import { MenusComponent } from '@app/modules/uikit/menus/component/menus/menus.component';
@NgModule({
  imports: [
    CommonModule,
    BreadcrumbModule,
    MenubarModule,
    TabMenuModule,
    StepsModule,
    TieredMenuModule,
    MenuModule,
    ButtonModule,
    ContextMenuModule,
    MegaMenuModule,
    PanelMenuModule,
    InputTextModule,
    MenusRoutingModule,
  ],
  declarations: [MenusComponent],
  exports: [RouterModule],
})
export class MenusModule {}
