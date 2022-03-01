import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Error } from 'app/typings';
import { error } from '../../mockData/';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  error: Error;
  constructor(private router: Router) {
    this.error = error;
  }

  public goToMainPage(): void {
    this.router.navigate(['']);
  }
}
