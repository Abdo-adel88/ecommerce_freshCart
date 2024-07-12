import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PaginatorModule } from 'primeng/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { BrandsComponent } from './component/brands/brands.component';
import { CategoriesComponent } from './component/categories/categories.component';

import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HTTP_INTERCEPTORS, HttpClientModule} from'@angular/common/http';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { VerifyResetCodeComponent } from './component/verify-reset-code/verify-reset-code.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';
import { HomeCategoriesSlidComponent } from './component/home-categories-slid/home-categories-slid.component';
import { HomeMainSlidComponent } from './component/home-main-slid/home-main-slid.component';
import { AuthInterceptor } from './Interceptor/auth.interceptor';
import { ShappingAddressComponent } from './component/shapping-address/shapping-address.component';
import { OrdersComponent } from './component/orders/orders.component';
import { SearchPipe } from './Pipes/search.pipe';
import { AllproductsComponent } from './component/allproducts/allproducts.component';
import { WishListComponent } from './component/wish-list/wish-list.component';
import { DetailsCategroiesComponent } from './component/details-categroies/details-categroies.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { DetailsbrandComponent } from './component/detailsbrand/detailsbrand.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BrandsComponent,
    CategoriesComponent,
   
    CartComponent,
    ProductComponent,
    NotfoundComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    VerifyResetCodeComponent,
    ResetpasswordComponent,
  
    ProductdetailsComponent,
       HomeCategoriesSlidComponent,
       HomeMainSlidComponent,
       ShappingAddressComponent,
       OrdersComponent,
       SearchPipe,
       AllproductsComponent,
       WishListComponent,
       DetailsCategroiesComponent,
       DetailsbrandComponent,
      
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule ,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    PaginatorModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
