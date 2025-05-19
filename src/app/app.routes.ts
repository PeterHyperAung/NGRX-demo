import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/ngrx/components/ngrx/ngrx.component').then(
        (m) => m.NgrxComponent
      ),
    pathMatch: 'full',
  },
  {
    path: 'ngrx-entity',
    loadComponent: () =>
      import(
        './features/ngrx-entity/components/ngrx-entity/ngrx-entity.component'
      ).then((m) => m.NgrxEntityComponent),
  },
  {
    path: 'rxjs',
    loadComponent: () =>
      import('./features/rxjs-demo/rxjs-demo.component').then(
        (m) => m.RxjsDemoComponent
      ),
  },
];
