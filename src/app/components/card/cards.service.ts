import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { initialState } from 'app/state/cards/cards.reducer';

@Injectable({ providedIn: 'root' })
export class CardService {
  private storageInitialised = false;

  constructor(private storage: Storage) {}

  async getCards(): Promise<string[]> {
    if (!this.storageInitialised) await this.storage.create();
    return (await this.storage.get('cards')) || initialState.cards;
  }

  async saveCards(texts: string[]) {
    if (!this.storageInitialised) await this.storage.create();

    return this.storage.set('cards', texts);
  }
}
