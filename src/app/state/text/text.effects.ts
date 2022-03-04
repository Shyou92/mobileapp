import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TextService } from 'app/components/main/main.service';
import { catchError, from, map, of, switchMap, withLatestFrom } from 'rxjs';
import { loadText, loadTextFailure, loadTextSuccess } from './text.actions';
import { initialState } from './text.reducer';
import { selectAllTexts } from './text.selectors';

@Injectable()
export class TextEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private textService: TextService
  ) {}

  loadText$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadText),
      switchMap(() =>
        from(this.textService.getText()).pipe(
          map((texts) => loadTextSuccess({ texts: texts })),
          catchError((error) => of(loadTextFailure({ error })))
        )
      )
    )
  );

  saveTexts$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadText),
        withLatestFrom(this.store.select(selectAllTexts)),
        switchMap(([action, texts]) => from(this.textService.saveTexts(texts)))
      ),
    { dispatch: false }
  );
}
