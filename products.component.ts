import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
products=[
  {name:'Roses',price:25,image:'assets/roses.jpg'},
  {name:'Jasmines',price:30,image:'assets/jasmines.jpg'},
  {name:'Tulips',price:50,image:'assets/tulips.jpg'}
];
}
