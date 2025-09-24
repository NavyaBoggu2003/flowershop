import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreenComponent } from './screen/screen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatCommonModule } from '@angular/material/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';
import { HomefruitComponent } from './homefruit/homefruit.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FruitModule } from './fruit/fruit.module';
import { NavbarComponent } from './flowershop/navbar/navbar.component';
import { ProductsComponent } from './flowershop/products/products.component';
import { ProductCardComponent } from './flowershop/product-card/product-card.component';
import { PageComponent } from './flowershop/page/page.component';
import { SearchComponent } from './search/search.component';
import { BookingComponent } from './booking/booking.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { SearchingComponent } from './productlist/searching/searching.component';
import { ProductComponent } from './productlist/product/product.component';
 @NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    HomeComponent,
    AboutComponent,
    SidenavComponent,
    LoginComponent,
    HomefruitComponent,
    CreateComponent,
    EditComponent,
    NavbarComponent,
    ProductsComponent,
    ProductCardComponent,
    PageComponent,
    SearchComponent,
    BookingComponent,
    ProductlistComponent,
    SearchingComponent,
    ProductComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCommonModule,
    FruitModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
