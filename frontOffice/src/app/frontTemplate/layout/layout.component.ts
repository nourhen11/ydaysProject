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
  constructor(private router:Router, private productservice:ProductService) { }

  ngOnInit(): void {
    console.log(this.isLogged)
    this.productservice.getCategories().subscribe(data=>{
      this.categories=data
    })
  }
  logout(){
    console.log('logout')
    localStorage.removeItem('user_token')
    localStorage.removeItem('access_role')
    this.router.navigateByUrl('/')
  }

}
