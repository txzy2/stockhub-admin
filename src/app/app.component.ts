import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  hideHeader: boolean = false;
  title = 'StockAdmin';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.hideHeader = event.url === '/login';
      });

    this.createCircles();
  }

  createCircles() {
    const numCircles: number = 90;
    const container = document.querySelector('.background-container');

    for (let i = 0; i < numCircles; i++) {
      const circle = document.createElement('div');
      circle.classList.add('circle');
      circle.style.width = `${Math.random() * 20}px`;
      circle.style.height = circle.style.width;
      circle.style.left = `${Math.random() * 100}%`;
      circle.style.top = `${Math.random() * 100}%`;
      const animationDuration = Math.random() * 10 + 3;
      circle.style.animation = `move ${animationDuration}s linear infinite`;
      if (container) {
        container.appendChild(circle);
      }

    }
  }

}
