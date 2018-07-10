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

  acceptOrder(key) {
    this.orderService.acceptOrder(key);
  }

  setIsPayd(key) {
    this.orderService.setIsPayd(key);
  }

  setNotPayd(key) {
    this.orderService.setNotPayd(key);
  }

}
