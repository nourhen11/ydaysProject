import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.css']
})
export class AdminproductComponent implements OnInit {
products: any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    console.log('bnjr')
    this.productService.getProducts()
    .subscribe(data=>{
      console.log(data)
      this.products = data
    })
  }

}
