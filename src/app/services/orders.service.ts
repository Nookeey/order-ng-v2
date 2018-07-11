import { Order } from './../models/order';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  private basePath = '/orders';
  public selectedOrder: Order = new Order();

  constructor(private db: AngularFireDatabase) {}

  addOrder(order) {
    this.db.list(this.basePath).push(order).then(_ =>
      console.log('Dodano nowe zamowienie')
    );
  }

  getOrders(): Observable<any[]> {
    return this.db.list(this.basePath).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  deleteOrder(key) {
    this.db.list(this.basePath).remove(key);
  }

  deleteAllOrders() {
    this.db.list(this.basePath).remove();
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

  updateOrder(order: Order) {
    this.db.list(this.basePath).update(order.$key, {
      customer: order.customer,
      price: order.price,
      dinner: order.dinner
    });
  }

}
