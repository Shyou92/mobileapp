import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { initialState } from 'app/state/text/text.reducer';

@Injectable({ providedIn: 'root' })
export class TextService {
  private storageInitialised = false;

  constructor(private storage: Storage) {}

  async getText(): Promise<string[]> {
    if (!this.storageInitialised) await this.storage.create();
    return (await this.storage.get('texts')) || initialState.texts;
  }

  async saveTexts(texts: string[]) {
    if (!this.storageInitialised) await this.storage.create();

    return this.storage.set('texts', texts);
  }
}
