import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CardService } from 'app/components/card/cards.service';

import { catchError, from, map, of, switchMap, withLatestFrom } from 'rxjs';
import { loadCard, loadCardFailure, loadCardSuccess } from './cards.actions';
import { selectAllCards } from './cards.selector';

@Injectable()
export class CardEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private cardService: CardService
  ) {}

  loadCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCard),
      switchMap(() =>
        from(this.cardService.getCards()).pipe(
          map((cards) =>
            loadCardSuccess({
              cards: cards,
            })
          ),
          catchError((error) => of(loadCardFailure({ error })))
        )
      )
    )
  );

  saveCard$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadCard),
        withLatestFrom(this.store.select(selectAllCards)),
        switchMap(([action, cards]) => from(this.cardService.saveCards(cards)))
      ),
    { dispatch: false }
  );
}
