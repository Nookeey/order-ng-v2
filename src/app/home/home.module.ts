import { SharedModule } from './../shared/shared.module';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent, AddOrderComponent, NewOrdersComponent, OrdersComponent, EditOrderComponent, DetailsOrderComponent } from './index';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HomeComponent,
    AddOrderComponent,
    NewOrdersComponent,
    OrdersComponent,
    EditOrderComponent,
    DetailsOrderComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class HomeModule {}
