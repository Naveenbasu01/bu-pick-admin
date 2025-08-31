import { Component, inject, OnInit } from '@angular/core';
import { FireStore } from '../../shared/services/fire-store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [AsyncPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export default class ProductList implements OnInit {
  private fireStoreService = inject(FireStore);
  productList$!: Observable<any[]>;

  ngOnInit(): void {
    this.getReq();
  }

  getReq() {
    this.productList$ = this.fireStoreService.getItems();
  }
}
