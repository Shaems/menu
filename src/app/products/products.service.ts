import { getLocalePluralCase } from '@angular/common';
import { Injectable } from '@angular/core';
import {Product} from './product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
    {
      id:'1',
      title:'Milanesa Completa con Fritas',
      imageURL: 'https://www.hola.com/imagenes/viajes/20200325164049/torre-eiffel-paris-maravillas-del-mundo-desde-mi-pantalla/0-803-221/maravillas-desde-mi-pantalla-torre-eiffel-m.jpg',
      detail: 'milanesa de ternera con',
      price: 250,
      comments: ['Awesome place', 'wonderful experience']
    },
    {
      id:'2',
      title:'Eiffel tower 2',
      imageURL: 'https://www.hola.com/imagenes/viajes/20200325164049/torre-eiffel-paris-maravillas-del-mundo-desde-mi-pantalla/0-803-221/maravillas-desde-mi-pantalla-torre-eiffel-m.jpg',
      detail: 'milanesa de ternera con',
      price: 250,
      comments: ['Awesome place', 'wonderful experience']
    },
    {
      id:'3',
      title:'Eiffel tower',
      imageURL: 'https://www.hola.com/imagenes/viajes/20200325164049/torre-eiffel-paris-maravillas-del-mundo-desde-mi-pantalla/0-803-221/maravillas-desde-mi-pantalla-torre-eiffel-m.jpg',
      detail: 'milanesa de ternera con',
      price: 250,
      comments: []
    },
  ]


  constructor() { }

  getProducts() {
    return [...this.products]
  }
  //retorna una copia de los lugares

  getProduct(productId: string) {
    return {
    ...this.products.find(product => {
      return product.id === productId
      })
    }
  }
// busqueda de Id. recorre. Retorna dentro de un objeto
  addProduct(title: string, imageURL: string, detail: string, price: number) {
    this.products.push({
      title,
      imageURL,
      detail,
      price,
      comments: [],
      id: this.products.length + 1 + ""
    })
  }

// Recibe los datos del lugar
  deleteProduct(productId: string) {
    this.products = this.products.filter(product=> {
      return product.id !== productId
    })
  }

//si cada lugar que estas recoriendo coincide con el id que me mandan no agregarlo a la lista. Este nuevo valor no guardarlo
}
