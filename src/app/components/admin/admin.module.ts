import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './components/users/users.component';
import {ProductsModule} from "./components/products/products.module";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    ProductsModule,
    SharedModule
  ],
})
export class AdminModule {
}
