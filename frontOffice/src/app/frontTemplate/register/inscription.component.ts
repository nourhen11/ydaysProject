import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
     
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
  // display form values on success
  console.log(this.registerForm.value)
 
}
onReset() {
  this.submitted = false;
  this.registerForm.reset();
}
}
