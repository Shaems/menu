import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/products/carrito.service';


@Component({
  selector: 'app-carrito-list',
  templateUrl: './carrito-list.component.html',
  styleUrls: ['./carrito-list.component.scss'],
})
export class CarritoListComponent implements OnInit {

  items=[];

  constructor(private carrito: CarritoService) { }

  ngOnInit() {
    this.items=this.carrito.listCarrito();
    console.log(this.items)
  }

}
