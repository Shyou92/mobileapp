import { createAction, props } from '@ngrx/store';

export const loadText = createAction('[Text] Load Text');

export const loadTextSuccess = createAction(
  '[Text API] Text Load Success',
  props<{ texts: string[] }>()
);

export const loadTextFailure = createAction(
  '[Text API] Text Load Failure',
  props<{ error: string }>()
);
