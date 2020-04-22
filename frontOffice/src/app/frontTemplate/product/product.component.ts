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
  imgsrc:any
  checklocal = localStorage.getItem('product')
  successAlert=false
  constructor(private productservice: ProductService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productservice.getProduct( this.route.snapshot.paramMap.get('id')).subscribe(data =>{
      this.product=data
      this.imgsrc = 'http://localhost:3000/image/'+this.product.images[0]
     console.log(this.product)
     if(!this.checklocal){
       localStorage.setItem('product','[]')
     }
    });
  
  }
  addToCart(){
     if(this.product){
       let item = {
         'title' : this.product.title,
         'price' : this.product.price,
         'image' : this.product.images[0],
       }
  
      let arr = JSON.parse(localStorage.getItem('product'))
      arr.push(item)
      localStorage.setItem('product', JSON.stringify(arr))
      this.successAlert= true
     }
 }
  changeUrl(url){
    this.imgsrc='http://localhost:3000/image/'+url
  }
}
