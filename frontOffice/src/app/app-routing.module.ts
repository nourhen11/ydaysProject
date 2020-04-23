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
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { WishlistComponent } from './frontTemplate/wishlist/wishlist.component';
import { AdressComponent } from './frontTemplate/adress/adress.component';
import { ShippingComponent } from './frontTemplate/shipping/shipping.component';
import { PaymentComponent } from './frontTemplate/payment/payment.component';
import { CompletedComponent } from './frontTemplate/completed/completed.component';
import { CommandslistComponent } from './frontTemplate/commandslist/commandslist.component';
import { FilterComponent } from './frontTemplate/filter/filter.component';





const routes: Routes = [
  {path:'',component:LayoutComponent,
    children:[
       {path:'product/:id',component:ProductComponent},
       {path:'products',component:ProductsComponent},
       {path:'',component:HomeComponent},
       {path:'login',component:LoginComponent},
       {path:'inscription',component:InscriptionComponent},
       {path:'order',component:OrderComponent},
       {path:'aboutus',component:AboutusComponent},
       {path:'wishlist',component:WishlistComponent},
       {path:'adress',component:AdressComponent},
       {path:'shipping',component:ShippingComponent},
       {path:'payment',component:PaymentComponent},
       {path:'completed',component:CompletedComponent},
       {path:'commandslist',component:CommandslistComponent},
       {path:'filter/:id_category',component:FilterComponent}

    ]
},

{path:'registerprovider',component:RegisterproviderComponent},
{path:'loginprovider',component:LoginproviderComponent},

 {path:'dashbord',component:LayoutadminComponent ,
 canActivate: [AuthGuard],
   children:[
   {path:'products',component:AdminproductComponent},
   {path:'profileprovider',component:ProfileproviderComponent},
   {path:'addproduct',component:AddproductComponent},
   {path:'providers',component:ProviderslistComponent},
  ] 
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
