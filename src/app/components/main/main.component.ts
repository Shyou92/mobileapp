import { Component, OnInit } from '@angular/core';
import { Card } from 'app/typings';
import { cards } from '../../mockData';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  cards: Card[] = cards;
}
