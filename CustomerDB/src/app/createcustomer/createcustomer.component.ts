import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent implements OnInit {

  constructor(private api: ApiService , private router: Router, private formBuilder: FormBuilder) {
  }
  CreateForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.CreateForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }
  get f() { return this.CreateForm.controls; }

  addCustomer() {
    this.submitted = true;
    if (this.CreateForm.invalid) {
      return;
    }
    this.api.postCustomer({id: this.CreateForm.value.id, name: this.CreateForm.value.name, email: this.CreateForm.value.email})
      .subscribe(res => {
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'Customer data saved successfully',
          showConfirmButton: false,
          timer: 4000
        });
        this.router.navigate(['/customers']);
      }, (err) => {
        console.log(err);
      });
  }
}
