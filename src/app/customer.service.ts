import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl : String = "http://localhost:8080/customer" ;

  constructor(private httpClient : HttpClient) { }

  getAllCustomers() : Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.baseUrl}`);
  }

  createCustomer(customer : Customer) : Observable<any> {
    return this.httpClient.post(`${this.baseUrl}`, customer);
  }

}
