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

  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"home",canActivate:[authguardGuard],component:HomeComponent},
  {path:"cart",canActivate:[authguardGuard],component:CartComponent},
  {path:"shappingaddress/:id",canActivate:[authguardGuard],component:ShappingAddressComponent},
  {path:"brands",canActivate:[authguardGuard],component:BrandsComponent},
  {path:"product",canActivate:[authguardGuard],component:ProductComponent},
  {path:"products",canActivate:[authguardGuard],component:AllproductsComponent},
  {path:"footer",canActivate:[authguardGuard],component:FooterComponent},
  {path:"categories",canActivate:[authguardGuard],component:CategoriesComponent},
  {path:"detail-categories/:id",canActivate:[authguardGuard],component:DetailsCategroiesComponent},
  {path:"detail-brands/:id",canActivate:[authguardGuard],component:DetailsbrandComponent},
  {path:"wishList",canActivate:[authguardGuard],component:WishListComponent},
  {path:"allorders",canActivate:[authguardGuard],component:OrdersComponent},
  {path:"notfound",canActivate:[authguardGuard],component:NotfoundComponent},
  {path:"productdetails/:id",canActivate:[authguardGuard],component:ProductdetailsComponent},

  {path:"login",canActivate:[noautdGuard] ,component:LoginComponent},
  {path:"register",canActivate:[noautdGuard],component:RegisterComponent},
  {path:"forget-password",canActivate:[noautdGuard],component:ForgetPasswordComponent},
  {path:"verify-reset-code",canActivate:[noautdGuard],component:VerifyResetCodeComponent},
  {path:"reset-password",canActivate:[noautdGuard],component:ResetpasswordComponent},
  {path:"**",component:NotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
