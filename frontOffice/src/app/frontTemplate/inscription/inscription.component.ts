import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators,FormGroup } from '@angular/forms';
import {AuthService} from '../../services/auth.service'
import { Router } from '@angular/router';
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
  });
  }
  get f() { return this.registerForm.controls; }


}
