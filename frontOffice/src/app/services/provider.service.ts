import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) { }

  registerProvider(provider){
    return this.http.post('http://localhost:3000/provider/register',provider);
  }
}
