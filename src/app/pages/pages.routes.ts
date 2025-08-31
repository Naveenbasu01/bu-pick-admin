import { Routes } from '@angular/router';

const pageRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/pages'),
    children: [
      {
        path: 'product-list',
        loadComponent: () => import('../pages/product-list/product-list'),
      },
    ],
  },
];

export default pageRoutes;
