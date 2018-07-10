import { OrderService } from './../../services/orders.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Order } from '../../models/order';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  orderForm: FormGroup;

  order = new Order();

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderForm = new FormGroup({
      customer: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      dinner: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    // console.log(this.orderForm);
    this.order.customer = this.orderForm.value.customer;
    this.order.price = this.orderForm.value.price;
    this.order.dinner = this.orderForm.value.dinner;
    this.order.isPayd = false;
    this.order.status = false;
    // console.log(this.order);
    this.orderService.addOrder(this.order);
    this.onReset();
  }

  onReset() {
    this.orderForm.reset();
  }


}
