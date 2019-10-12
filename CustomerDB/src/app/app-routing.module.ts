import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {CustomersComponent} from './customers/customers.component';
import {CustomerdetailsComponent} from './customerdetails/customerdetails.component';
import {CreatecustomerComponent} from './createcustomer/createcustomer.component';
import {UpdatecustomerComponent} from './updatecustomer/updatecustomer.component';


const routes: Routes = [
  {
    path: '',
    component: CustomersComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'customerDetails/:id',
    component: CustomerdetailsComponent
  },
  {
    path: 'create',
    component: CreatecustomerComponent
  },
  {
    path: 'editCustomer',
    component: UpdatecustomerComponent
  }]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CustomersComponent , CustomerdetailsComponent, CreatecustomerComponent, UpdatecustomerComponent];
