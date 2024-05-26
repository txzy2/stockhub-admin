import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-layout',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public currentUser: { email: string } | null = null;

  constructor(private router: Router) {
    const userString = localStorage.getItem('angular17token');
    if (userString) {
      this.currentUser = JSON.parse(userString);
    }
  }

  logout() {
    localStorage.removeItem('angular17token');
    this.router.navigateByUrl('/login');
  }
}
