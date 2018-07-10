import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  private basePath = '/orders';
  public orders: any;
  public order: any;

  constructor(private db: AngularFireDatabase) {}

  addOrder(order) {
    const obj = this.db.database.ref(this.basePath);
    obj.push(order);
    console.log('Success');
  }

  getOrders(): Observable<any[]> {
    return this.db.list(this.basePath).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  deleteOrder(key) {
    this.db.list(this.basePath).remove(key);
  }

  acceptOrder(key) {
    this.db.list(this.basePath).update(key, {
      status: true
    });
  }

  setIsPayd(key) {
    this.db.list(this.basePath).update(key, {
      isPayd: true
    });
  }

  setNotPayd(key) {
    this.db.list(this.basePath).update(key, {
      isPayd: false
    });
  }

  // EXAMPLES ->
  // addToList(item: any) {
  //   this.questions.push(item);
  // }
  // removeItemFromList(key: string) {
  //   this.questions.remove(key).then(_ => console.log('item deleted!'));
  // }
  // deleteEntireList() {
  //   this.questions.remove().then(_ => console.log('deleted!'));
  // }
  // setValue(data: any) {
  //   this.value.set(data).then(_ => console.log('set!'));
  // }
  // updateValue(data: any) {
  //   this.value.update(data).then(_ => console.log('update!'));
  // }
  // deleteValue() {
  //   this.value.remove().then(_ => console.log('deleted!'));
  // }

}
