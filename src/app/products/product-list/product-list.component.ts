import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Product } from '../model/product';
import { FormControl, Validators } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import { ProductService } from '../services/product.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  pageTitle = 'Product list';
  imgWidth = 50;
  imgMargin = 2;
  showImage = false;
  filter: FormControl;

  displayedColumns = [
      'productId', 'productName', 'productCode', 'releaseDate', 'price', 'starRating'
    ];
  dataSource: MatTableDataSource<Product>;

  constructor(private productApi: ProductService) { }

  ngOnInit() {

    //   this.dataSource = new MatTableDataSource(this.productApi.getProducts());
    this.productApi.getProducts()
        .subscribe(data => this.dataSource = new MatTableDataSource(data))
    
      this.filter = new FormControl('', {});
      this.filter.valueChanges
        .debounceTime(500)
        .distinctUntilChanged()
        .subscribe(value => {
          this.applyFilter(value);
      });
  }

  toggleImg() {
      this.showImage = !this.showImage;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  onRatingChanged(rating, product) {
    console.log(rating);
    product.starRating = rating;
  }

}
