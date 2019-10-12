import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {
  customer = {};
  editFlag: boolean;
  saveFlag: boolean;
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.editFlag = true;
    this.saveFlag = false;
    this.getCustomerDetails(this.route.snapshot.params['id']);
  }

  getCustomerDetails(id) {
    this.api.getCustomer(id)
      .subscribe(data => {
        console.log(data);
        this.customer = data;
      });
  }

  editCustomer(id , customer){
  this.editFlag = false;
  this.saveFlag = true;

  }
  SaveCustomer(customer){
    console.log('updated cust: ', customer);
    let id = this.route.snapshot.params['id'];
    this.api.updateCustomer(id, customer)
      .subscribe(res => {
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'Customer data saved successfully',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/customers']);
      }, (err) => {
        console.log(err);
      });
  }
  deleteCustomer(id) {
    this.api.deleteCustomer(id)
      .subscribe(res => {
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'Customer data deleted successfully',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/customers']);
        }, (err) => {
          console.log(err);
        }
      );
  }


}
