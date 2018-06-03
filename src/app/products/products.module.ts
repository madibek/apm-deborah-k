import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpacePipe } from './pipes/convert-to-space.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductGuardService } from './services/product-guard.service';
import { ProductService } from './services/product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductGuardService],
        component: ProductDetailComponent
      },
    ])
  ],
  exports: [
    SharedModule
  ],
  providers: [
    ProductService,
    ProductGuardService
  ],
  declarations: [
    ProductListComponent,
    ConvertToSpacePipe,
    ProductDetailComponent
  ]
})
export class ProductsModule { }
