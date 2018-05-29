import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatFormFieldModule,
  MatTableModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatSnackBar,
  MatSnackBarContainer
 } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpacePipe } from './pipes/convert-to-space.pipe';
import { StarComponent } from './shared/star/star.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacePipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [
    MatSnackBar,
    ProductService
  ],
  entryComponents: [
    StarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
