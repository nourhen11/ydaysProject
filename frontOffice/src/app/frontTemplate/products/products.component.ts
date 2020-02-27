import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';

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
       console.log(data)
       this.products=data
       console.log('drhdthdtr')
     });
  console.log(this.products)
  }


}
