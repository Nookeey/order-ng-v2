import { Observable } from 'rxjs';
import { OrderService } from './../../services/orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public orders: Observable<any[]>;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orders = this.getOrders();
  }

  getOrders() {
    return this.orderService.getOrders();
  }

  deleteOrder(key) {
    this.orderService.deleteOrder(key);
  }

  setIsPayd(key) {
    this.orderService.setIsPayd(key);
  }

  setNotPayd(key) {
    this.orderService.setNotPayd(key);
  }

}
