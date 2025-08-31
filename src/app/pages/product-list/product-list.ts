import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { FireStore } from '../../shared/services/fire-store';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export default class ProductList implements OnInit {
  private fireStoreService = inject(FireStore);
  productList: any[] = [];

  ngOnInit(): void {
    this.getReq();
  }

  getReq() {
    this.fireStoreService.getItems().subscribe((res: any) => {
      // this.productList = res;
      console.log('fire-store:', res);
    });
  }
}
