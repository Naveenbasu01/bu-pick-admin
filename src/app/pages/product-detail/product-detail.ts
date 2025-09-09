import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export default class ProductDetail implements OnInit {
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const data = this.route.snapshot.data['productDetails'];
    console.log('product-detail :', data);
  }
}
