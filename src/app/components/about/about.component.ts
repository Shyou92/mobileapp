import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { cards } from 'app/mockData';
import { selectAllCards } from 'app/state/cards/cards.selector';
import { selectAllTexts } from 'app/state/text/text.selectors';
import { Card } from 'app/typings';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  cards: Card[] = cards;
  public allText$ = this.store.select(selectAllTexts);
  public allCards$ = this.store.select(selectAllCards);

  constructor(private router: Router, private store: Store) {}

  public goToMainPage(): void {
    this.router.navigate(['']);
  }
}
