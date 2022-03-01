import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { FormServices } from '../../services';
import { Card, Error } from '../../typings';
import { cards, error } from '../../mockData';
import { SnackbarComponent } from '../snackBar/snackBar.component';

export class FormItem {
  constructor(
    public phoneNumber: number | string,
    public amountOfMoney: number
  ) {}
}

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss'],
})
export class OperatorComponent implements OnInit {
  cards: Card[];
  card: Card;
  error: Error;

  checkoutForm = this.formBuilder.group({
    phoneNumber: '',
    amountOfMoney: '',
  });

  phoneNumber = new FormControl('', [Validators.required]);

  public isValid: Boolean;

  ngOnInit(): void {
    if (Number(this.route.snapshot.paramMap.get('id')) > cards.length) {
      this.router.navigate(['/notfound']);
    }
  }

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private formServices: FormServices,
    private router: Router,
    public snackBar: MatSnackBar
  ) {
    this.cards = cards;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.card = this.getSingleCardForm(id);
    this.isValid = false;
    this.error = error;
  }

  private getSingleCardForm(id: number) {
    const card = this.cards.filter((item) => {
      return item.id === id;
    });
    return card[0];
  }

  getErrorMessage() {
    if (this.phoneNumber.hasError('required')) {
      return 'You must enter a value';
    }
    return;
  }

  submitForm() {
    const data = this.checkoutForm.value;
    this.formServices
      .sendFormData(data, this.card, this.isValid)
      .then((res) => {
        if (res.status === 200) {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 5000,
            data: `${res.data.message}: ${res.data.sent.amountOfMoney}₽ for ${res.data.sent.phoneNumber}.
           You will be redirected to main page in 5 seconds`,
          });
          this.checkoutForm.reset();
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 5000);
        } else {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 5000,
            data: `${res.data.message}: ${res.data.sent.amountOfMoney}₽ for ${res.data.sent.phoneNumber}.
             Try again one more time.`,
          });
        }
      })
      .catch((err) => {
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 5000,
          data: `${err.data.message}: ${err.data.sent.amountOfMoney}₽ for ${err.data.sent.phoneNumber}.
         Try again one more time.`,
        });
      });
  }
}
