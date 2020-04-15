import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './frontTemplate/layout/layout.component';
import { HomeComponent } from './frontTemplate/home/home.component';
import { ProductsComponent } from './frontTemplate/products/products.component';
import { ProductComponent } from './frontTemplate/product/product.component';
import { SidebarComponent } from './frontTemplate/sidebar/sidebar.component';
import { LoginComponent } from './fronttemplate/login/login.component';
import { InscriptionComponent } from './frontTemplate/register/inscription.component';

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
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
