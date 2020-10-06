import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  product: Product

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paranMap => {
      //redirect
      const recipedId = paranMap.get('productId')
      this.product = this.productsService.getProduct(recipedId);
    })
  }
  async deleteProduct() {

    const alertElement = await this.alertCtrl.create({
      header: 'Are your sure, you want to delete it?',
      message: 'Be careful',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () =>{
            this.productsService.deleteProduct(this.product.id)
            this.router.navigate(['/products'])
          }

        }
      ]
    });
//Que mostrar dentro de la alerta
    await alertElement.present();
   
  }
// llama al servicio deletePlace, y elimina de ese place la id
//Le decimos a que ruta queremos que nos redirija
}
