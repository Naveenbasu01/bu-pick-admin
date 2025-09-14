import { Component, inject, OnInit } from '@angular/core';
import { FireStore } from '../../shared/services/fire-store';
import { Observable } from 'rxjs';
import { product } from '../../shared/constants/product.constant';
import { Routes } from '../../shared/services/routes';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [AsyncPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export default class ProductList implements OnInit {
  private fireStoreService = inject(FireStore);
  private routeService = inject(Routes);
  productList$!: Observable<any[]>;

  ngOnInit(): void {
    this.getReq();
  }
  /////////////////////  API CALLS //////////////////////////////////

  getReq() {
    this.productList$ = this.fireStoreService.getItems();
    this.productList$.subscribe((data) => {
        console.log(data)
    })
  }
  postReq() {
    this.fireStoreService.addProduct(product);
  }

  ////////////////// NAVIGATION ///////////////////////////////

  routeToProductPage(id: string) {
    this.routeService.routeToProductPage(id);
  }
}
