import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'button',
        data: { breadcrumb: 'Button' },
        loadChildren: () =>
          import('./button/button.module').then((m) => m.ButtonDemoModule),
      },
      {
        path: 'charts',
        data: { breadcrumb: 'Charts' },
        loadChildren: () =>
          import('./charts/charts.module').then((m) => m.ChartsDemoModule),
      },
      {
        path: 'file',
        data: { breadcrumb: 'File' },
        loadChildren: () =>
          import('./file/file.module').then((m) => m.FileDemoModule),
      },
      {
        path: 'floatlabel',
        data: { breadcrumb: 'Float Label' },
        loadChildren: () =>
          import('./floatlabel/floatlabel.module').then(
            (m) => m.FloatLabelModule
          ),
      },
      {
        path: 'formlayout',
        data: { breadcrumb: 'Form Layout' },
        loadChildren: () =>
          import('./formlayout/formlayout.module').then(
            (m) => m.FormLayoutModule
          ),
      },
      {
        path: 'input',
        data: { breadcrumb: 'Input' },
        loadChildren: () =>
          import('./input/input.module').then((m) => m.InputModule),
      },
      {
        path: 'invalidstate',
        data: { breadcrumb: 'Invalid State' },
        loadChildren: () =>
          import('./invalid/invalid.module').then((m) => m.InvalidModule),
      },
      {
        path: 'list',
        data: { breadcrumb: 'List' },
        loadChildren: () =>
          import('./list/list.module').then((m) => m.ListModule),
      },
      {
        path: 'media',
        data: { breadcrumb: 'Media' },
        loadChildren: () =>
          import('./media/media.module').then((m) => m.MediaModule),
      },
      {
        path: 'message',
        data: { breadcrumb: 'Message' },
        loadChildren: () =>
          import('./messages/messages.module').then(
            (m) => m.MessagesDemoModule
          ),
      },
      {
        path: 'misc',
        data: { breadcrumb: 'Misc' },
        loadChildren: () =>
          import('./misc/misc.module').then((m) => m.MiscModule),
      },
      {
        path: 'overlay',
        data: { breadcrumb: 'Overlay' },
        loadChildren: () =>
          import('./overlays/overlays.module').then((m) => m.OverlaysModule),
      },
      {
        path: 'panel',
        data: { breadcrumb: 'Panel' },
        loadChildren: () =>
          import('./panels/panels.module').then((m) => m.PanelsModule),
      },
      {
        path: 'table',
        data: { breadcrumb: 'Table' },
        loadChildren: () =>
          import('./table/table.module').then((m) => m.TableDemoModule),
      },
      {
        path: 'tree',
        data: { breadcrumb: 'Tree' },
        loadChildren: () =>
          import('./tree/tree.module').then((m) => m.TreeDemoModule),
      },
      {
        path: 'menu',
        data: { breadcrumb: 'Menu' },
        loadChildren: () =>
          import('./menus/menus.module').then((m) => m.MenusModule),
      },
      { path: '**', redirectTo: '/notfound' },
    ]),
  ],
  exports: [RouterModule],
})
export class UIkitRoutingModule {}
