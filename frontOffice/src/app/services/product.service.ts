import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get('http://localhost:3000/products');
  }
  getProduct(id){
    return this.http.get('http://localhost:3000/products/'+id);
 }

 getCategories(){ 
  return this.http.get('http://localhost:3000/categories');
}
getProviders(){ 
  return this.http.get('http://localhost:3000/providers');
}
getProductsByCategory(id){
  return this.http.get('http://localhost:3000/products/category/'+id)
}
getSubcategories(id_category){
  return this.http.get('http://localhost:3000/subcategories/'+id_category)
}
}

