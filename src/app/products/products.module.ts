import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpacePipe } from './pipes/convert-to-space.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './services/product-guard.service';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StarComponent } from './star/star.component';
import { ProductService } from './services/product.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,    
    NgMaterialModule,
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
    NgMaterialModule
  ],
  providers: [
    ProductService,
    ProductGuardService
  ],
  declarations: [
    ProductListComponent,
    ConvertToSpacePipe,
    ProductDetailComponent,
    StarComponent
  ],
  entryComponents: [
    StarComponent
  ]
})
export class ProductsModule { }
