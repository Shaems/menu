import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductsService} from './products.service'


@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products = []
  productsService: any;

  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
// this.products tendra el valor que me traen del servicio

  ionViewWillEnter () {
    this.products = this.productService.getProducts();
  }
  // Vuelve a pintar el inicio

  addNewProduct() {
    this.router.navigate(['/new-product']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
  addNewPedido() {
    this.router.navigate(['/pedido']);
  }
  GoToCarrito() {
    this.router.navigate(['/carrito']);
  }

}
