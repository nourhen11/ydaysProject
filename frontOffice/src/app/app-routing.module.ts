import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './frontTemplate/layout/layout.component';
import { HomeComponent } from './frontTemplate/home/home.component';
import { ProductsComponent } from './frontTemplate/products/products.component';
import { ProductComponent } from './frontTemplate/product/product.component';
import { LoginComponent } from './fronttemplate/login/login.component';
import { InscriptionComponent } from './fronttemplate/inscription/inscription.component';
import { AdminproductComponent } from './dashbordadmin/adminproduct/adminproduct.component';
import { LayoutadminComponent } from './dashbordadmin/layoutadmin/layoutadmin.component';
import { AddproductComponent } from './dashbordadmin/addproduct/addproduct.component';
import { ProfileproviderComponent } from './dashbordadmin/profileprovider/profileprovider.component';
import { RegisterproviderComponent } from './registerprovider/registerprovider.component';
import { LoginproviderComponent } from './loginprovider/loginprovider.component';
import { ProviderslistComponent } from './dashbordadmin/providerslist/providerslist.component';
import { OrderComponent } from './frontTemplate/order/order.component';
import { AboutusComponent } from './frontTemplate/aboutus/aboutus.component';


const routes: Routes = [
  {path:'',component:LayoutComponent,
    children:[
       {path:'product',component:ProductComponent},
       {path:'products',component:ProductsComponent},
       {path:'home',component:HomeComponent},
       {path:'login',component:LoginComponent},
       {path:'inscription',component:InscriptionComponent},
       {path:'order',component:OrderComponent},
       {path:'aboutus',component:AboutusComponent},

    ]
},
{path:'dashbord',component:LayoutadminComponent,
   children:[
   {path:'products',component:AdminproductComponent},
   {path:'profileprovider',component:ProfileproviderComponent},
   {path:'addproduct',component:AddproductComponent},
   {path:'productlist',component:ProviderslistComponent},

]

},
{path:'registerprovider',component:RegisterproviderComponent,
children:[
{path:'registerprovider',component:RegisterproviderComponent},]},

{path:'loginfournisseur',component:LoginproviderComponent,
children:[
{path:'loginfournisseur',component:LoginproviderComponent},]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
