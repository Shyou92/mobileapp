import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { cards } from 'app/mockData';
import { Card } from 'app/typings';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  cards: Card[] = cards;

  constructor(private router: Router) {}

  public goToMainPage(): void {
    this.router.navigate(['']);
  }
}
