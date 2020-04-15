import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LayoutComponent } from './frontTemplate/layout/layout.component';
import { HomeComponent } from './frontTemplate/home/home.component';
import { ProductsComponent } from './frontTemplate/products/products.component';
import { ProductComponent } from './frontTemplate/product/product.component';
import { SidebarComponent } from './frontTemplate/sidebar/sidebar.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    SidebarComponent,
    LoginComponent,
    InscriptionComponent,
    AdminproductComponent,
    LayoutadminComponent,
    AddproductComponent,
    ProfileproviderComponent,
    RegisterproviderComponent,
    LoginproviderComponent,
    ProviderslistComponent,
    OrderComponent,
    AboutusComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
