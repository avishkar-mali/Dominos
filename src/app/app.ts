import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CustomerList } from './customer-list/customer-list';
import { CreateCustomer } from './create-customer/create-customer';
import { FormsModule } from '@angular/forms';
import { Header } from './header/header';
import { Footer } from './footer/footer';


@Component({
  selector: 'app-root',
  standalone : true,
  imports: [RouterOutlet, RouterLink, CustomerList, CreateCustomer, FormsModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'pizza-app';
}
