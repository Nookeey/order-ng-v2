import { SharedModule } from './../shared/shared.module';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent, AddOrderComponent, NewOrdersComponent, OrdersComponent } from './index';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent, AddOrderComponent, NewOrdersComponent, OrdersComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule]
})
export class HomeModule {}
