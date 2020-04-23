import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  products:any
  subcategories:any
  constructor(private productservice: ProductService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.productservice.getProductsByCategory( this.route.snapshot.paramMap.get('id_category')).subscribe(data =>{
      this.products=data   
    });
    this.productservice.getSubcategories(this.route.snapshot.paramMap.get('id_category')).subscribe(data=>{
      this.subcategories=data
    })
  }

}
