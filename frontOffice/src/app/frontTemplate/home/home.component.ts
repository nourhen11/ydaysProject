import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any;
  constructor(private productService : ProductService, route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    console.log('bnjr')
    this.productService.getProducts()
    .subscribe(data=>{
      console.log(data)
      this.products = data
    })
    /*console.log('bnjr')
    this.productservice.findAll()
    .subscribe((prods: {count: Number, products:any[]}) =>{
      this.products = prods.products;
      console.log(this.products);
    });*/
  }
  selectProduct(id) {
    console.log('wwazz')
    this.router.navigate(['/product/', id]);
  console.log('pp')
  }

}
