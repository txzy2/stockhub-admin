import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Auth} from "../../../shared/types/types";

const auth: Auth[] = [
  {
    email: "kamaeff2@gmail.com",
    password: "qwerty123"
  },
  {
    email: 'tu@gmail.com',
    password: '123456',
  }
]

@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public email: string = '';
  public password: string = '';
  public errorMessage: string = '';

  constructor(private router: Router) {
  }

  login() {
    if (this.email.trim() === '' || this.password.trim() === '') {
      this.errorMessage = 'Пожалуйста, заполните все поля.';
      return;
    }

    const user: Auth | undefined = auth.find(u => u.email === this.email && u.password === this.password);
    if (!user) {
      this.errorMessage = 'Неверный логин или пароль';
      return;
    }


    localStorage.setItem('angular17token', JSON.stringify(user));
    this.router.navigateByUrl('/admin');

  }
}
