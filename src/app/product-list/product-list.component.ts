import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Product } from '../model/product';
import { FormControl, Validators } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

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
  dataSource = new MatTableDataSource(PRODUCT_LIST_DATA);

  constructor() { }

  ngOnInit() {
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

}

const PRODUCT_LIST_DATA: Product[] = [
  {
    'productId': 1,
    'productName': 'Leaf Rake',
    'productCode': 'GDN-0011',
    'releaseDate': 'March 19, 2016',
    'description': 'Leaf rake with 48-inch wooden handle.',
    'price': 19.95,
    'starRating': 3.2,
    'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
},
{
    'productId': 2,
    'productName': 'Garden Cart',
    'productCode': 'GDN-0023',
    'releaseDate': 'March 18, 2016',
    'description': '15 gallon capacity rolling garden cart',
    'price': 32.99,
    'starRating': 4.2,
    'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
},
{
    'productId': 5,
    'productName': 'Hammer',
    'productCode': 'TBX-0048',
    'releaseDate': 'May 21, 2016',
    'description': 'Curved claw steel hammer',
    'price': 8.9,
    'starRating': 4.8,
    'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
},
{
    'productId': 8,
    'productName': 'Saw',
    'productCode': 'TBX-0022',
    'releaseDate': 'May 15, 2016',
    'description': '15-inch steel blade hand saw',
    'price': 11.55,
    'starRating': 3.7,
    'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png'
},
{
    'productId': 10,
    'productName': 'Video Game Controller',
    'productCode': 'GMG-0042',
    'releaseDate': 'October 15, 2015',
    'description': 'Standard two-button video game controller',
    'price': 35.95,
    'starRating': 4.6,
    'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png'
}
];
