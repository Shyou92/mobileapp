import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectCard = (state: AppState | any) => state.cards;

export const selectAllCards = createSelector(selectCard, (state: any) => {
  console.log(state.cards);

  return state.cards;
});
