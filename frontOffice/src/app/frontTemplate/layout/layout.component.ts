import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
import{ ProductService} from '../../services/product.service'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isLogged = (localStorage.getItem('access_role') ? true : false)
  categories:any
  cartClick=false
  panier = JSON.parse(localStorage.getItem('product'))
  nbrproduct:0
  constructor(private router:Router, private productservice:ProductService) { }

  ngOnInit(): void {
    console.log(this.isLogged)
    this.productservice.getCategories().subscribe(data=>{
      this.categories=data
    })
    console.log(this.panier)
    this.nbrproduct=this.panier.length
  }
  logout(){
    console.log('logout')
    localStorage.removeItem('user_token')
    localStorage.removeItem('access_role')
    this.router.navigateByUrl('/')
  }
  openCart(){
    console.log('ok');
    this.cartClick = true
  }
  closeCart(){
    console.log('ko');
    this.cartClick = false
  }
  delteFromCart(product){
    console.log("ggg")
  }
}
