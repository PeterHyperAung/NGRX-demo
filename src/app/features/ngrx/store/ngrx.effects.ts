import { inject, Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { NGRXActions } from "./ngrx.actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { ProductService } from "../../../services/product.service";

@Injectable()
export class NgrxEffects {
  
    private actions$ = inject(Actions);
    private productService = inject(ProductService);

    loadNGRXEffect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(NGRXActions.loadNGRX),
            exhaustMap(() => this.productService.getProducts().pipe(
                map((products: any) => NGRXActions.loadNGRXSuccess({ products })),
                catchError((error) => of(NGRXActions.loadNGRXFailure({ error })))
            )),
        )
    })
}