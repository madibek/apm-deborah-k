import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  MatSnackBarContainer,
  MatToolbarModule
 } from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbarModule
  ],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbarModule
  ],
  declarations: [],
  providers: [
    MatSnackBar
  ],
})
export class NgMaterialModule { }
