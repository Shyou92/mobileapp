import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { initialCardsState } from 'app/state/cards/cards.reducer';
import { Card } from 'app/typings';

@Injectable({ providedIn: 'root' })
export class CardService {
  private storageInitialised = false;

  constructor(private storage: Storage) {}

  async getCards(): Promise<Card[]> {
    if (!this.storageInitialised) await this.storage.create();
    return (await this.storage.get('cards')) || initialCardsState.cards;
  }

  async saveCards(cards: Card[]) {
    if (!this.storageInitialised) await this.storage.create();

    return this.storage.set('cards', cards);
  }
}
