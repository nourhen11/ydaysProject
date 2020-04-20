import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators,FormGroup } from '@angular/forms';
import {AuthService} from '../../services/auth.service'
import { Router } from '@angular/router';
import{MustMatch} from './must-match.validator'

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,private authservice : AuthService,private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],    
  }, {
    validator: MustMatch('password', 'confirmPassword')
  });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
   // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log("invalid form")
        return;
    }
    this.authservice.register(this.registerForm.value).subscribe(data =>{
      if(data['message']="succefly added"){
       alert('you are added with success');
       this.router.navigate(['/login'])
      
      }
     })
  }

}
