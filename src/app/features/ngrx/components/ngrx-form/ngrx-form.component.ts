import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { NGRX, Product } from '../../store/ngrx.state';
import { NGRXActions } from '../../store/ngrx.actions';

@Component({
  selector: 'app-ngrx-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ngrx-form.component.html',
  styleUrl: './ngrx-form.component.css',
})
export class NgrxFormComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<{ ngrx: NGRX }>) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const product = {
        id: new Date().getTime(),
        ...this.productForm.value,
      } as Product;
      this.store.dispatch(NGRXActions.addNGRX({ product }));
      console.log('Submitted Product:', this.productForm.value);
    } else {
      this.productForm.markAllAsTouched();
    }
  }
}
