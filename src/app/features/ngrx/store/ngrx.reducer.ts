import { createFeature, createReducer, on } from '@ngrx/store';
import { intialState } from './ngrx.state';
import { NGRXActions } from './ngrx.actions';

const reducer = createReducer(
  intialState,
  on(NGRXActions.loadNGRXSuccess, (state, { products }) => {
    return {
      ...state,
      products: [...products],
      loading: false,
      error: null,
    };
  }),
  on(NGRXActions.loadNGRXFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error: error,
    };
  }),
  on(NGRXActions.addNGRX, (state, { product }) => {
    return {
      ...state,
      loading: true,
      error: null,
      products: [...state.products, product],
    };
  }),
  on(NGRXActions.addNGRXSuccess, (state) => {
    return {
      ...state,
      loading: false,
      error: null,
    };
  }),
  on(NGRXActions.addNGRXFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error: error,
    };
  })
);

export const NGRXFeature = createFeature({
  name: 'ngrx',
  reducer,
});
