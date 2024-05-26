import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  MainPanelComponent
} from "./components/admin/components/main-panel/main-panel.component";
import {authGuard} from "../shared/services/auth-guard.guard";
import {LoginComponent} from "./components/auth/login.component";
import {
  UsersComponent
} from "./components/admin/components/users/users.component";
import {
  ProductsComponent
} from "./components/admin/components/products/products.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'admin',
    component: MainPanelComponent,
    canActivate: [authGuard],
    children: [
      {path: 'products', component: ProductsComponent},
      {path: 'users', component: UsersComponent}
    ]
  },
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

