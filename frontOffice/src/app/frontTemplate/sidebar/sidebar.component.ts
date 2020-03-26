import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ProviderService} from '../../services/provider.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private categoryService : CategoryService,private providerService : ProviderService) { }

  categories : any;
  providers : any;

  ngOnInit(): void {
  this.categoryService.getCategories().subscribe(data =>{
      this.categories=data
      console.log(this.categories)
    });
  
    this.providerService.getProviders().subscribe(data => {
      this.providers = data
      console.log(this.providers)
    })
  }

}
