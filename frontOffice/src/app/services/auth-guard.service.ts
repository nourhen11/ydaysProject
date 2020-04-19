import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  token =localStorage.getItem('provider_token') ? true : false 
  constructor(private router : Router) { }

  canActivate():  boolean {  
    if (this.token) { 
       return true
    } 
    else {
    this.router.navigate(['/loginprovider']);
    return false;
    }
}

}
