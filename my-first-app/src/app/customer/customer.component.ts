import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  name = 'Jeba Shiny';
  phone = 7305358443;
  customerInfo = {'id':123, 'dob':'1998-10-06', 'name':'Shiny'};
}
