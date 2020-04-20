import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators,FormGroup } from '@angular/forms';
import {ProviderService} from '../../services/provider.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  
  productForm : FormGroup;
  submitted = false;
  images = [];
  files = []
  categories :any
  subcategories:any
  constructor(private fb: FormBuilder,private providerservice : ProviderService,private router:Router) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      reference: ['', Validators.required],
      title: ['', Validators.required],
      category: ['', Validators.required],
      subcategory: ['', Validators.required],
      price: ['', Validators.required],
      color: ['', Validators.required],
      quantity: ['', Validators.required],
      Description: ['', Validators.required],
      photos:['']
 });  
 this.providerservice.getCategories().subscribe(data =>{
   this.categories =data
   console.log(this.categories)
 })
}
onFileChange(event) {
  if (event.target.files && event.target.files[0]) {
     // var filesAmount = event.target.files.length;
     this.files.push(event.target.files[0]); 
              var reader = new FileReader();
              reader.onload = (event) => {
                 this.images.push(event.target.result); 
              }
              reader.readAsDataURL(event.target.files[0]);
      
  }
}

get f() { return this.productForm.controls; }

getsubCategories(event){
  this.subcategories= ''
  console.log(this.subcategories)
  let id=this.productForm.value.category
  this.providerservice.getSubcategories(id).subscribe(data=>{
    this.subcategories=data
  })
}
onSubmit() {
  this.submitted = true;
  if (this.productForm.invalid) {
    console.log(this.f)
      return;
  }
  console.log(this.files)
  this.providerservice.uploadfiles(this.files).subscribe(result =>{
    console.log(result)
  })
}

}
