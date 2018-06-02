import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    let result = true;
    const id = +route.url[1].path;

    if (isNaN(id) || id < 1) {
      alert(`Product id must be greater than 0! Actual: ${id}`)
      this.router.navigate(['/products']);
      result = false;
    }

    return Observable.of(result);

  }

}
