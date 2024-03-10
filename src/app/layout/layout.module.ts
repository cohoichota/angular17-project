import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppConfigModule } from '@app/layout/components/config/config.module';
import { AppFooterComponent } from '@app/layout/components/footer/app.footer.component';
import { AppLayoutComponent } from '@app/layout/components/layout/app.layout.component';
import { AppMenuComponent } from '@app/layout/components/menu/app.menu.component';
import { AppMenuitemComponent } from '@app/layout/components/menuitem/app.menuitem.component';
import { AppSidebarComponent } from '@app/layout/components/sidebar/app.sidebar.component';
import { AppTopBarComponent } from '@app/layout/components/topbar/app.topbar.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';

const PRIMENG_MODULES = [
  InputTextModule,
  SidebarModule,
  BadgeModule,
  RadioButtonModule,
  InputSwitchModule,
  RippleModule,
];

@NgModule({
  declarations: [
    AppMenuitemComponent,
    AppTopBarComponent,
    AppFooterComponent,
    AppMenuComponent,
    AppSidebarComponent,
    AppLayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    AppConfigModule,
    ...PRIMENG_MODULES,
  ],
  exports: [AppLayoutComponent],
})
export class LayoutModule {}
