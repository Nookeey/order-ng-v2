import { Order } from './../../models/order';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  addNewOrderForm: NgForm;

  order = new Order();

  constructor(public db: AngularFireDatabase) { }

  ngOnInit() {
  }

  onSubmit() {
    this.order.isPay = false;
    this.order.status = false;
    this.db.list('/orders').push(this.order);
    this.reset();
  }

  reset() {
    this.order = new Order();
    this.addNewOrderForm.resetForm(this.order);
  }

}
