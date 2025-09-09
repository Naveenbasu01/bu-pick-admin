import { inject, Injectable } from '@angular/core';
import {
  arrayUnion,
  collection,
  collectionData,
  doc,
  docData,
  Firestore,
  getDoc,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FireStore {
  private fireStore = inject(Firestore);

  //////////////////// GET ALL PRODUCTS ///////////////////////////////

  getItems(): Observable<any[]> {
    const itemsRef = collection(this.fireStore, 'product');
    return collectionData(itemsRef, { idField: 'product_id' }) as Observable<
      any[]
    >;
  }

  /////////////////// GET PRODUCT BY ID /////////////////////////////////

  async getProduct(productId: string) {
    const productRef = doc(this.fireStore, 'product', productId);
    const productSnap = await getDoc(productRef);

    if (productSnap.exists()) {
      return productSnap.data();
    } else {
      return null;
    }
  }

  getProductResolver(productId: string): Observable<any> {
    const productRef = doc(this.fireStore, 'product', productId);
    return docData(productRef, { idField: 'id' });
  }

  ///////////////////////// ADD NEW PRODUCT ////////////////////////

  async addProduct(product: any) {
    const productRef = doc(this.fireStore, 'product', product.product_id);
    return await setDoc(productRef, product);
  }

  /////////////////// ADD NEW VARIANT /////////////////////////////////////

  async putVariant(productId: string, newVariant: any) {
    const productRef = doc(this.fireStore, `product/${productId}`);

    await updateDoc(productRef, {
      variants: arrayUnion(newVariant),
    });

    console.log('Variant added without removing old ones');
  }
}
