import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/ngrx/components/ngrx/ngrx.component').then(
        (m) => m.NgrxComponent
      ),
  },
];
