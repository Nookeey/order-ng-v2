import { AuthGuardsService } from './../services/auth-guards.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './index';

const authRouting: Routes = [
  {
    path: '',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRouting)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
