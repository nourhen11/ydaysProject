import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './frontTemplate/layout/layout.component';
import { HomeComponent } from './frontTemplate/home/home.component';
import { ProductsComponent } from './frontTemplate/products/products.component';
import { ProductComponent } from './frontTemplate/product/product.component';


const routes: Routes = [
  {path:'',component:LayoutComponent,
    children:[
       {path:'product',component:ProductComponent},
       {path:'products',component:ProductsComponent},
       {path:'home',component:HomeComponent}
    ]
},


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
