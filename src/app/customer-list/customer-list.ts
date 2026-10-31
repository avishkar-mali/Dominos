import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer'; 
import { CommonModule } from '@angular/common';
import { CustomerService } from '../customer.service';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-customer-list',
  standalone : true,
  imports: [ CommonModule, Header, Footer],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css'
})


export class CustomerList implements OnInit{
    
  ngOnInit(): void {
    this.getAllCustomers(); 
  }

  constructor(private customerService : CustomerService){};
   
  customers : Customer[] = [];
  

  private getAllCustomers() {
    this.customerService.getAllCustomers().subscribe(data => {
      this.customers = data;
    });
  }

}
