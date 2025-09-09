import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { FireStore } from '../fire-store';

export const productResolver: ResolveFn<boolean> = (route, state) => {
  const fireStoreService = inject(FireStore);
  const id: any = route.paramMap.get('id');

  return fireStoreService.getProductResolver(id);
};
