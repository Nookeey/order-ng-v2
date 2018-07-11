import { OrderService } from './../../services/orders.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent {

  editForm: NgForm;

  constructor(public orderService: OrderService) { }

  onSubmit(editForm: NgForm) {
    console.log(editForm.value);
    this.orderService.updateOrder(editForm.value);
  }

}
