import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NGRX } from '../../store/ngrx.state';
import { NGRXActions } from '../../store/ngrx.actions';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { NgrxFormComponent } from '../ngrx-form/ngrx-form.component';

@Component({
  selector: 'app-ngrx',
  standalone: true,
  imports: [NgrxFormComponent, AsyncPipe, JsonPipe],
  templateUrl: './ngrx.component.html',
  styleUrl: './ngrx.component.css',
})
export class NgrxComponent implements OnInit {
  data$!: Observable<NGRX>;
  constructor(private store: Store<{ ngrx: NGRX }>) {}

  ngOnInit() {
    this.store.dispatch(NGRXActions.loadNGRX());
    this.data$ = this.store.select('ngrx');
  }
}
