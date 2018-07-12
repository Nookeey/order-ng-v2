import { AuthService } from './../../services/auth.service';
import { Order } from './../../models/order';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from '../../services/orders.service';

@Component({
  selector: 'app-new-orders',
  templateUrl: './new-orders.component.html',
  styleUrls: ['./new-orders.component.css']
})
export class NewOrdersComponent implements OnInit {

  public orders: Observable<any[]>;

  public order = new Order();

  constructor(private orderService: OrderService, public authService: AuthService) { }

  ngOnInit() {
    this.orders = this.getOrders();
  }

  getOrders() {
    return this.orderService.getOrders();
  }

  deleteOrder(key) {
    this.orderService.deleteOrder(key);
  }

  acceptOrder(key) {
    this.orderService.acceptOrder(key);
  }

  setIsPayd(key) {
    this.orderService.setIsPayd(key);
  }

  setNotPayd(key) {
    this.orderService.setNotPayd(key);
  }

  getOrder(order: Order) {
    this.orderService.selectedOrder = Object.assign({}, order);
  }

}
