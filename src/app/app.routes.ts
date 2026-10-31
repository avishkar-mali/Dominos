import { Routes } from '@angular/router';
import { CustomerList } from './customer-list/customer-list';
import { CreateCustomer } from './create-customer/create-customer';

export const routes: Routes = [
    {path : 'customer', component : CustomerList},
    {path : 'create-customer', component : CreateCustomer},
    {path : '', redirectTo:'customer', pathMatch:'full'}

];
