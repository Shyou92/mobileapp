import { createReducer, on } from '@ngrx/store';
import { Card } from 'app/typings';
import { loadCard, loadCardFailure, loadCardSuccess } from './cards.actions';

export interface CardState {
  cards: Card[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialCardsState: CardState = {
  cards: [
    {
      img: '../../../assets/images/cat.jpg',
      id: 1,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga voluptate voluptatem unde?',
      name: 'The Awesome Title',
    },
    {
      img: '../../../assets/images/anotherCat.jpg',
      id: 2,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga voluptate voluptatem unde?',
      name: 'Another Awesome Title',
    },
  ],
  error: '',
  status: 'pending',
};

export const cardReducer = createReducer(
  initialCardsState,
  on(loadCard, (state) => ({ ...state, status: 'loading' })),
  on(loadCardSuccess, (state) => ({
    ...state,
    cards: state.cards,
    error: '',
    status: 'success',
  })),
  on(loadCardFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
