import { inject, Injectable } from '@angular/core';
import {
  arrayUnion,
  collection,
  collectionData,
  doc,
  Firestore,
  query,
  updateDoc,
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FireStore {
  private fireStore = inject(Firestore);

  getItems(): Observable<any[]> {
    const itemsRef = collection(this.fireStore, 'product');
    return collectionData(itemsRef, { idField: 'product_id' }) as Observable<
      any[]
    >;
  }

  async putVariant(productId: string, newVariant: any) {
    const productRef = doc(this.fireStore, `product/${productId}`);

    await updateDoc(productRef, {
      variants: arrayUnion(newVariant),
    });

    console.log('✅ Variant added without removing old ones');
  }
}
