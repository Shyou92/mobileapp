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

export const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
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
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
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
