import { createFeatureSelector } from "@ngrx/store";
import { NGRXFeature } from "./ngrx.reducer";
import { NGRX } from "./ngrx.state";

export const selectNGRXState = NGRXFeature.selectNgrxState;
export const selectLoading = NGRXFeature.selectLoading;
export const selectProducts = NGRXFeature.selectProducts;
export const selectError = NGRXFeature.selectError;

