import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product : any
  constructor(private productservice: ProductService,private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.productservice.getProduct( this.route.snapshot.paramMap.get('id')).subscribe(data =>{
      this.product=data
      console.log(this.product)
    });
  }

}
