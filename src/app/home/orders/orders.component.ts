import { OrderService } from './../../services/orders.service';
import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Order } from '../../models/order';
import { query } from '@angular/core/src/render3/query';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.orders = db.list('orders').valueChanges();
  }

  ngOnInit() {

  }
}
