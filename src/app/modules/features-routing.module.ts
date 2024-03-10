import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'uikit',
    loadChildren: () =>
      import('./uikit/uikit.module').then((m) => m.UIkitModule),
  },
  {
    path: 'utilities',
    loadChildren: () =>
      import('./utilities/utilities.module').then((m) => m.UtilitiesModule),
  },
  {
    path: 'documentation',
    loadChildren: () =>
      import('./documentation/documentation.module').then(
        (m) => m.DocumentationModule
      ),
  },
  {
    path: 'blocks',
    loadChildren: () =>
      import('./primeblocks/primeblocks.module').then(
        (m) => m.PrimeBlocksModule
      ),
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
