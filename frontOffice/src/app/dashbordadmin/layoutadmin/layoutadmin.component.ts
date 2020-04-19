import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../../services/provider.service'
import {Router} from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-layoutadmin',
  templateUrl: './layoutadmin.component.html',
  styleUrls: ['./layoutadmin.component.css']
})
export class LayoutadminComponent implements OnInit {
 provider :{}
 idprovider = jwt_decode(localStorage.getItem('provider_token')).providerId
 accessRole = localStorage.getItem('access_role')

  constructor(private providerservice : ProviderService,private router : Router) { }
  ngOnInit(): void {
    this.providerservice.getProvider(this.idprovider).subscribe(result =>{
      this.provider = result
    })
    
  }
  logout(){
      localStorage.removeItem('provider_token')
      localStorage.removeItem('access_role')
      this.router.navigateByUrl('/loginprovider')
  }

}
