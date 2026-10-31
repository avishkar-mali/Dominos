import { Component } from '@angular/core';
import { Customer } from '../customer';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';


@Component({
  standalone : true,
  selector: 'app-create-customer',
  imports: [FormsModule, Header, Footer],
  templateUrl: './create-customer.html',
  styleUrls: ['./create-customer.css']
})
export class CreateCustomer {

  constructor(private customerService : CustomerService, private router : Router){};

  customer : Customer = new Customer();

  
  saveCustomer(){
    this.customerService.createCustomer(this.customer).subscribe({
      next : (data) => {
      console.log(data);
      this.goToCustomerList();
    },
    error: (err) => {
      console.error('Error saving customer:', err);
    }
  });
}
  
  goToCustomerList(){
    this.router.navigate(['/customer'])
  }
  
  onSubmit() {
    console.log('Form submitted:', this.customer);
    this.saveCustomer();
  }


}
