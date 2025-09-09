import { Routes } from '@angular/router';
import { productResolver } from '../shared/services/guards/product-resolver';

const pageRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/pages'),
    children: [
      {
        path: 'product-list',
        loadComponent: () => import('../pages/product-list/product-list'),
      },
      {
        path: 'product-detail/:id',
        loadComponent: () => import('../pages/product-detail/product-detail'),
        resolve: {
          productDetails: productResolver,
        },
      },
    ],
  },
];

export default pageRoutes;
