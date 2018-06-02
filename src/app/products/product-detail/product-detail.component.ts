import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product detail: ';
  product: Product;
  
  constructor(private route: ActivatedRoute,
              private router: Router,
              private productApi: ProductService) { }

  ngOnInit() {

    this.route.paramMap
        .subscribe(param => {
          const id = +param.get('id');
          this.product = this.productApi.getProduct(id);
        })
  }

  onBack() {
    this.router.navigate(['/products']);
  }

  onNext() {
    const nextId = this.product.productId + 1;
    this.router.navigate(['/products', nextId]);
  }

}
