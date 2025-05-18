import { createAction } from '@ngrx/store';

export const loadNGRX = createAction('[NGRX Component] Load NGRX');

export const loadNGRXSuccess = createAction(
  '[NGRX Component] Load NGRX Success',
  (ngrx: any) => ({ ngrx })
);

export const loadNGRXFailure = createAction(
  '[NGRX Component] Load NGRX Failure',
  (error: any) => ({ error })
);

export const addNGRX = createAction(
  '[NGRX Component] Add NGRX',
  (ngrx: any) => ({ ngrx })
);

export const addNGRXSuccess = createAction(
  '[NGRX Component] Add NGRX Success',
  (ngrx: any) => ({ ngrx })
);

export const addNGRXFailure = createAction(
  '[NGRX Component] Add NGRX Failure',
  (error: any) => ({ error })
);
