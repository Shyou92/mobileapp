import { CardState } from './cards/cards.reducer';
import { TextState } from './text/text.reducer';

export interface AppState {
  texts: TextState;
  cards: CardState;
}
