import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../features/ngrx/store/ngrx.state';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('/api/products');
  }

  addProduct(product: Product) {
    return this.http.post<Product>('/api/products', product);
  }
}
