import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators,FormGroup } from '@angular/forms';
import {AuthService} from '../../services/auth.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  submitted = false;
  invalid = false
  constructor(private fb: FormBuilder,private authservice : AuthService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({   
      email: ['',Validators.required],
      password: ['',Validators.required],
  });  
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      console.log(this.f)
        return;
    }  
    console.log(this.loginForm.value)
    this.authservice.login(this.loginForm.value).subscribe(data =>{
      if('token' in data && data['role']=="user"){
        console.log(data['role'])
        localStorage.setItem('user_token', data['token'])
        localStorage.setItem('access_role', data['role'])
        this.router.navigateByUrl('/products')
      }
     })
  }

}
