import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private API_URL = 'http://localhost:3000/products'; 

  constructor(private http: HttpClient) {}

  // Get all 
  getProducts(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  // Get a single 
  getProduct(id: string): Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  // Create 
  createProduct(productData: any): Observable<any> {
    return this.http.post(this.API_URL, productData);
  }

  // Update 
  updateProduct(id: string, productData: any): Observable<any> {
    return this.http.put(`${this.API_URL}/${id}`, productData);
  }

  // Delete
  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}

