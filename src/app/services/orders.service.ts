import { Order } from './../models/order';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/observable/of';
import { FirebaseDatabase } from 'angularfire2';

@Injectable()
export class OrderService {

  private ordersListObs = new BehaviorSubject<Array<Order>>([]);

  constructor(public db: FirebaseDatabase) {
  }



}
