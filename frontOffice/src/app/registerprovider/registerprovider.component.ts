import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators,FormGroup } from '@angular/forms';
import {ProviderService} from '../services/provider.service'
import { Router } from '@angular/router';
import{MustMatch} from './must-match.validator'
@Component({
  selector: 'app-registerprovider',
  templateUrl: './registerprovider.component.html',
  styleUrls: ['./registerprovider.component.css']
})
export class RegisterproviderComponent implements OnInit {

   registerProviderForm : FormGroup;
   submitted = false;
   imageSrc: any;
  constructor(private fb: FormBuilder,private providerservice : ProviderService,private router:Router) { }

  ngOnInit(): void {
    this.registerProviderForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      company: ['', Validators.required],
      siret : ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
 }, {
  validator: MustMatch('password', 'confirmPassword')
});  
}
get f() { return this.registerProviderForm.controls; }

onSubmit() {
  this.submitted = true;
  if (this.registerProviderForm.invalid) {
    console.log(this.f)
      return;
  }
  this.providerservice.registerProvider(this.registerProviderForm.value).subscribe(data =>{
   if(data['message']="succefly added"){
    alert('you are added with success');
    this.router.navigate(['/loginprovider'])
   
   }
  })
}

}
