import { createReducer, on } from '@ngrx/store';
import { loadText, loadTextFailure, loadTextSuccess } from './text.actions';

export interface Text {
  text: string;
}

export interface TextState {
  texts: string[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: TextState = {
  texts: [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quo corrupti voluptatibus tempore. Molestiae error enim iusto nisi deleniti doloremque, unde aliquam sed, tempore, debitis voluptatem modi ex quas. Ut.',
  ],
  error: '',
  status: 'pending',
};

export const textReducer = createReducer(
  initialState,
  on(loadText, (state) => ({ ...state, status: 'loading' })),
  on(loadTextSuccess, (state) => ({
    ...state,
    texts: state.texts,
    error: '',
    status: 'success',
  })),
  on(loadTextFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
