import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';
import { CarritoListComponent } from './componentes/carrito-list/carrito-list.component';
 
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate : [AuthGuard]
  },
  //Agregar a todas las pag canActivate : [AuthGuard]
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    children: [
      {
        path:"",
        loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
      },
      {
        path: ":productId",
        loadChildren: () => import('./products/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
      }
    ]
  },
  {
    path: 'new-product',
    loadChildren: () => import('./products/product-add/product-add.module').then(m =>m.ProductAddPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./componentes/login/login.module').then( m => m.LoginPageModule),
    canActivate : [NologinGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./componentes/registro/registro.module').then( m => m.RegistroPageModule)
  },
 // {
  //   path: 'pedido',
    // loadChildren: () => import('./places/pedido').then( m => m.PedidoPageModule)
   // },
   {
     path: 'carrito', component:CarritoListComponent
   }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
