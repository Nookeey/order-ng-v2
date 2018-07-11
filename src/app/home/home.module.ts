import { SharedModule } from './../shared/shared.module';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent, AddOrderComponent, NewOrdersComponent, OrdersComponent, EditOrderComponent } from './index';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, AddOrderComponent, NewOrdersComponent, OrdersComponent, EditOrderComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, ReactiveFormsModule]
})
export class HomeModule {}
