import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'crud',
        loadChildren: () =>
          import('./crud/crud.module').then((m) => m.CrudModule),
      },
      {
        path: 'empty',
        loadChildren: () =>
          import('./empty/empty.module').then((m) => m.EmptyModule),
      },
      {
        path: 'timeline',
        loadChildren: () =>
          import('./timeline/timeline.module').then(
            (m) => m.TimelineDemoModule
          ),
      },
      { path: '**', redirectTo: '/notfound' },
    ]),
  ],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
