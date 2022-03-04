import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Card } from '../../typings';
import { cards } from '../../mockData';
import { Store } from '@ngrx/store';
import { loadText } from 'app/state/text/text.actions';
import { selectAllTexts, selectText } from 'app/state/text/text.selectors';
@Injectable()
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public allText$ = this.store.select(selectAllTexts);

  cards: Card[] = cards;
  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadText());
  }

  public goToAboutUs(): void {
    this.router.navigate(['about']);
  }

  public goToLazyAboutUs(): void {
    this.router.navigate(['lazy/about']);
  }
}
