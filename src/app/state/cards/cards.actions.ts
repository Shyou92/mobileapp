import { createAction, props } from '@ngrx/store';
import { Card } from 'app/typings';

export const loadCard = createAction('[Card] Load Card');

export const loadCardSuccess = createAction(
  '[Card API] Card Load Success',
  props<{ cards: Card[] }>()
);

export const loadCardFailure = createAction(
  '[Card API] Card Load Failure',
  props<{ error: string }>()
);
