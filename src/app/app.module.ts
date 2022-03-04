import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';

import { MainComponent } from './components/main/main.component';
import { SnackbarComponent } from './components/snackBar/snackBar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormComponent } from './components/form/form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AboutComponent } from './components/about/about.component';
import { CardComponent } from './components/card/card.component';
import { TitleComponent } from './shared/UI/title/title.component';
import { ImageComponent } from './shared/UI/image/image.component';
import { CardTextComponent } from './shared/UI/card-text/card-text.component';
import { ButtonComponent } from './shared/UI/button/button.component';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Observable } from 'rxjs';
import { textReducer } from './state/text/text.reducer';
import { TextEffects } from './state/text/text.effects';
import { CardEffects } from './state/cards/cards.effects';
import { cardReducer } from './state/cards/cards.reducer';

export const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  {
    path: 'card/:id',
    component: FormComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SnackbarComponent,
    NotFoundComponent,
    FormComponent,
    AboutComponent,
    CardComponent,
    TitleComponent,
    ImageComponent,
    CardTextComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot(),
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ texts: textReducer, cards: cardReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([TextEffects, CardEffects]),
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: MATERIAL_SANITY_CHECKS,
      useValue: false,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
