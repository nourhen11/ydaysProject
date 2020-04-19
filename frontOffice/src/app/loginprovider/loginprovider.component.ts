import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators,FormGroup } from '@angular/forms';
import {ProviderService} from '../services/provider.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginprovider',
  templateUrl: './loginprovider.component.html',
  styleUrls: ['./loginprovider.component.css']
})
export class LoginproviderComponent implements OnInit {
  loginProviderForm : FormGroup;
  submitted = false;
  invalid = false

  constructor(private fb: FormBuilder,private providerservice : ProviderService,private router:Router) { }

  ngOnInit(): void {
    this.loginProviderForm = this.fb.group({   
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  });  
  }
  get f() { return this.loginProviderForm.controls; }

onSubmit() {
  this.submitted = true;
  if (this.loginProviderForm.invalid) {
    console.log(this.f)
      return;
  }  
  this.providerservice.loginProvider(this.loginProviderForm.value).subscribe(data =>{
    if('token' in data && data['role']=="provider"){
      console.log(data['role'])
      localStorage.setItem('provider_token', data['token'])
      localStorage.setItem('access_role', data['role'])
      this.router.navigateByUrl('/dashbord')
    }
   })
}

}
