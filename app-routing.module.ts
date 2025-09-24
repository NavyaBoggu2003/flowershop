import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenComponent } from './screen/screen.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './flowershop/navbar/navbar.component';
import { ProductsComponent } from './flowershop/products/products.component';
import { ProductCardComponent } from './flowershop/product-card/product-card.component';
import { PageComponent } from './flowershop/page/page.component';
import { SearchComponent } from './search/search.component';
import { BookingComponent } from './booking/booking.component';
import { ProductlistComponent } from './productlist/productlist.component';
const routes: Routes = [
  {path:'screen',component:ScreenComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'sidenav',component:SidenavComponent},
  {path:'login',component:LoginComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'products',component:ProductsComponent},
  {path:'product-card',component:ProductCardComponent},
  {path:'page',component:PageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' } ,
  {path:'',redirectTo:'search',pathMatch:'full'},
  {path:'search',component:SearchComponent},
  {path:'booking',component:BookingComponent},
  {path:'productlist',component:ProductlistComponent},
  {path:'',redirectTo:'productlist',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
