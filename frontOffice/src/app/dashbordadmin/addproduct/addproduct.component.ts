import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  img1:any
  selectedImage: File;
  constructor() { }

  ngOnInit(): void {
  }

  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.img1 = reader.result;

      reader.readAsDataURL(file);
    }
  }
  selectedFile(event) {
    console.log(event.target.files[0])
    this.selectedImage = event.target.files[0]
  }
}
