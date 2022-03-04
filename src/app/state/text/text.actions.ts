import { createAction, props } from '@ngrx/store';
import { Text } from './text.reducer';

export const addText = createAction(
  '[Text] Add Text',
  props<{ text: string }>()
);

export const loadText = createAction('[Text] Load Text');

export const loadTextSuccess = createAction(
  '[Text API] Text Load Success',
  props<{ texts: string[] }>()
);

export const loadTextFailure = createAction(
  '[Text API] Text Load Failure',
  props<{ error: string }>()
);
