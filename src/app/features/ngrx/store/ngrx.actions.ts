import { createAction, props } from '@ngrx/store';
import { Product } from './ngrx.state';

const loadNGRX = createAction('[NGRX Component] Load NGRX');

const loadNGRXSuccess = createAction(
  '[NGRX Component] Load NGRX Success',
  props<{ products: Product[] }>()
);

const loadNGRXFailure = createAction(
  '[NGRX Component] Load NGRX Failure',
  props<{ error: any }>()
);

const addNGRX = createAction(
  '[NGRX Component] Add NGRX',
  props<{ product: Product }>()
);

const addNGRXSuccess = createAction('[NGRX Component] Add NGRX Success');

const addNGRXFailure = createAction(
  '[NGRX Component] Add NGRX Failure',
  props<{ error: any }>()
);

export const NGRXActions = {
  loadNGRX,
  loadNGRXSuccess,
  loadNGRXFailure,
  addNGRX,
  addNGRXSuccess,
  addNGRXFailure,
};
