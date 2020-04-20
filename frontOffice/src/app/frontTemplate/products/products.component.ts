import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   products:any;
  constructor(private productservice: ProductService) { }

  ngOnInit() {
   
    console.log("test");
    this.productservice.getProducts().subscribe(data =>{
      this.products=data
      console.log(this.products)
    });
  }


}
