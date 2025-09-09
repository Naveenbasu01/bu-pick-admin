import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Routes {
  private router = inject(Router);

  routeToProductPage(id: string) {
    this.router.navigate(['/product-detail', id]);
  }
}
