import { Component } from '@angular/core';
import {
  interval,
  of,
  from,
  merge,
  concat,
  map,
  filter,
  take,
  debounceTime,
  mergeMap,
  switchMap,
  concatMap,
  exhaustMap,
  first,
  last,
  Observable,
  shareReplay,
} from 'rxjs';
import { ProductService } from '../../services/product.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-rxjs-demo',
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './rxjs-demo.component.html',
  styleUrl: './rxjs-demo.component.css',
})
export class RxjsDemoComponent {
  data$!: Observable<any>;
  constructor(private productService: ProductService) {
    this.data$ = this.productService.getProducts().pipe(shareReplay());

    // 1. interval emits 0,1,2,... every 500ms
    const source$ = interval(500);

    // ✅ take(n)
    source$.pipe(take(3)).subscribe((val) => console.log('take:', val));

    // ✅ first()
    source$.pipe(first()).subscribe((val) => console.log('first:', val));

    // ✅ last()
    source$.pipe(take(5), last()).subscribe((val) => console.log('last:', val));

    // ✅ debounceTime
    const fast$ = from([0, 1, 2, 3, 4]);
    fast$
      .pipe(debounceTime(1000))
      .subscribe((val) => console.log('debounce:', val)); // Won’t emit unless values are delayed

    // ✅ merge
    const a$ = interval(1000).pipe(take(2)); // 0,1
    const b$ = interval(500).pipe(take(2)); // 0,1
    merge(a$, b$).subscribe((val) => console.log('merge:', val));

    // ✅ concat
    concat(a$, b$).subscribe((val) => console.log('concat:', val));

    // ✅ map
    source$
      .pipe(
        take(3),
        map((x) => x * 10)
      )
      .subscribe((val) => console.log('map:', val));

    // ✅ filter
    source$
      .pipe(
        take(5),
        filter((x) => x % 2 === 0)
      )
      .subscribe((val) => console.log('filter (even):', val));

    // ✅ mergeMap – fire in parallel
    source$
      .pipe(
        take(2),
        mergeMap((x) => of(`mergeMap result ${x}`))
      )
      .subscribe((val) => console.log('mergeMap:', val));

    // ✅ switchMap – cancel previous
    source$
      .pipe(
        take(3),
        switchMap((x) => of(`switchMap result ${x}`))
      )
      .subscribe((val) => console.log('switchMap:', val));

    // ✅ concatMap – queue up sequentially
    source$
      .pipe(
        take(3),
        concatMap((x) => of(`concatMap result ${x}`))
      )
      .subscribe((val) => console.log('concatMap:', val));

    // ✅ exhaustMap – ignore new emissions if one is ongoing
    source$
      .pipe(
        take(3),
        exhaustMap((x) => of(`exhaustMap result ${x}`))
      )
      .subscribe((val) => console.log('exhaustMap:', val));
  }
}
