import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { BrandsComponent } from './component/brands/brands.component';
import { CategoriesComponent } from './component/categories/categories.component';

import { ProductComponent } from './component/product/product.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { VerifyResetCodeComponent } from './component/verify-reset-code/verify-reset-code.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { authguardGuard } from './Guards/authguard.guard';
import { noautdGuard } from './Guards/noautd.guard';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';
import { ShappingAddressComponent } from './component/shapping-address/shapping-address.component';
import { OrdersComponent } from './component/orders/orders.component';
import { AllproductsComponent } from './component/allproducts/allproducts.component';
import { WishListComponent } from './component/wish-list/wish-list.component';
import { DetailsCategroiesComponent } from './component/details-categroies/details-categroies.component';
import { DetailsbrandComponent } from './component/detailsbrand/detailsbrand.component';
import { FooterComponent } from './component/footer/footer.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  
  // { path: "home",loadComponent:()=>(import("./component/home/home.component").then((c)=>c.HomeComponent)),canActivate:[authguardGuard] },
  // { path: "cart",loadComponent:()=>(import("./component/cart/cart.component").then((c)=>c.CartComponent)),canActivate:[authguardGuard] },
  // { path: "shappingaddress/:id",loadComponent:()=>(import("./component/shapping-address/shapping-address.component").then((c)=>c.ShappingAddressComponent)),canActivate:[authguardGuard] },
  // { path: "brands",loadComponent:()=>(import("./component/brands/brands.component").then((c)=>c.BrandsComponent)),canActivate:[authguardGuard] },
  // { path: "product",loadComponent:()=>(import("./component/product/product.component").then((c)=>c.ProductComponent)),canActivate:[authguardGuard] },
  // { path: "products",loadComponent:()=>(import("./component/allproducts/allproducts.component").then((c)=>c.AllproductsComponent)),canActivate:[authguardGuard] },
  // { path: "footer",loadComponent:()=>(import("./component/footer/footer.component").then((c)=>c.FooterComponent)),canActivate:[authguardGuard] },
  // { path: "categories",loadComponent:()=>(import("./component/categories/categories.component").then((c)=>c.CategoriesComponent)),canActivate:[authguardGuard] },
  // { path: "detail-categories/:id",loadComponent:()=>(import("./component/details-categroies/details-categroies.component").then((c)=>c.DetailsCategroiesComponent)),canActivate:[authguardGuard] },
  // { path: "detail-brands/:id",loadComponent:()=>(import("./component/detailsbrand/detailsbrand.component").then((c)=>c.DetailsbrandComponent)),canActivate:[authguardGuard] },
  // { path: "wishList",loadComponent:()=>(import("./component/wish-list/wish-list.component").then((c)=>c.WishListComponent)),canActivate:[authguardGuard] },
  // { path: "productdetails/:id",loadComponent:()=>(import("./component/productdetails/productdetails.component").then((c)=>c.ProductdetailsComponent)),canActivate:[authguardGuard] },
  
 
  { path: "home", canActivate: [authguardGuard], component: HomeComponent },
  { path: "cart", canActivate: [authguardGuard], component: CartComponent },
  { path: "shappingaddress/:id", canActivate: [authguardGuard], component: ShappingAddressComponent },
  { path: "brands", canActivate: [authguardGuard], component: BrandsComponent },
  { path: "product", canActivate: [authguardGuard], component: ProductComponent },
  { path: "products", canActivate: [authguardGuard], component: AllproductsComponent },
  { path: "footer", canActivate: [authguardGuard], component: FooterComponent },
  { path: "categories", canActivate: [authguardGuard], component: CategoriesComponent },
  { path: "detail-categories/:id", canActivate: [authguardGuard], component: DetailsCategroiesComponent },
  { path: "detail-brands/:id", canActivate: [authguardGuard], component: DetailsbrandComponent },
  { path: "wishList", canActivate: [authguardGuard], component: WishListComponent },
  { path: "allorders", canActivate: [authguardGuard], component: OrdersComponent },
  { path: "notfound", canActivate: [authguardGuard], component: NotfoundComponent },
  { path: "productdetails/:id", canActivate: [authguardGuard], component: ProductdetailsComponent },
  
  
 



  { path: "login", canActivate: [noautdGuard], component: LoginComponent },
  { path: "register", canActivate: [noautdGuard], component: RegisterComponent },
  { path: "forget-password", canActivate: [noautdGuard], component: ForgetPasswordComponent },
  { path: "verify-reset-code", canActivate: [noautdGuard], component: VerifyResetCodeComponent },
  { path: "reset-password", canActivate: [noautdGuard], component: ResetpasswordComponent },
  { path: "**", component: NotfoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
