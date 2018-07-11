import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { DetailsService } from './../../services/details.service';
import { OrderService } from './../../services/orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-order',
  templateUrl: './details-order.component.html',
  styleUrls: ['./details-order.component.css']
})
export class DetailsOrderComponent implements OnInit {

  isDetails = 0;

  detailsForm: NgForm;

  detailsObs: Observable<any>;

  constructor(public orderService: OrderService, public detailsService: DetailsService) {
  }

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {
    this.detailsObs = this.detailsService.getDetails();
  }

  setModalVal(details) {
    this.detailsService.selectedDetails = details;
  }

  onSubmit(detailsForm: NgForm) {
    this.detailsService.updateDetails(detailsForm.value);
  }

  deleteAllOrders() {
    this.orderService.deleteAllOrders();
  }

}
