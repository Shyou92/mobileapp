import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { initialState, TextState } from './text.reducer';

export const selectText = (state: AppState | any) => state.texts;

export const selectAllTexts = createSelector(selectText, (state: any) => {
  return state.texts;
});
