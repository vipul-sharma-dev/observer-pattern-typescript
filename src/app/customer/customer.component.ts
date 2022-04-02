import { Component, OnInit } from '@angular/core';
import { AbstractSubject } from '../interfaces/abstract-subject';
import { Customer } from './customer.model';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customers: Array<Customer> = new Array<Customer>();

  constructor(private subject: AbstractSubject) {
    for(let index = 1; index <=2; index++) {
      this.customers.push(new Customer(`Customer ${index}`, subject));
    }
  }

  ngOnInit(): void {
  }
}
