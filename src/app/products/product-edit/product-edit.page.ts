import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.page.html',
  styleUrls: ['./product-edit.page.scss'],
})
export class ProductEditPage implements OnInit {

  product: Product

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService, private router: Router, private alertCtrl: AlertController) { }


  ngOnInit() {
  }

}