import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectCard = (state: AppState | any) => {
  return state.cards;
};

export const selectAllCards = createSelector(selectCard, (state) => {
  return state.cards;
});
