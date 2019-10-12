import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {

  constructor(private api: ApiService ,private router: Router,private formBuilder: FormBuilder) {
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
  updateCustomer(){
    this.submitted = true;
    if (this.CreateForm.invalid) {
      return;
    }
    this.api.postCustomer({id:'1',name:'bhavya',email: 'bhavya@gmail.com'})
      .subscribe(res => {
        this.router.navigate(['/customers']);
      }, (err) => {
        console.log(err);
      });
  }
  delete(id) {
    this.api.deleteCustomer(id)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/customers']);
      }, err => {
        console.log(err);
      });
  }
}
