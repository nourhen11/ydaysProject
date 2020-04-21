import { Component, OnInit } from '@angular/core';
import{ ProductService} from '../../services/product.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categories:any
  providers:any
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
    this.productservice.getCategories().subscribe(data=>{
      this.categories=data
    })
    this.productservice.getProviders().subscribe(data=>{
      this.providers=data
    })
  }

}
