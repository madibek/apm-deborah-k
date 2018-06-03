import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { StarComponent } from './star/star.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,    
    NgMaterialModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,    
    NgMaterialModule,
    StarComponent
  ],
  declarations: [
    StarComponent    
  ],
  entryComponents: [
    StarComponent
  ]

})
export class SharedModule { }
