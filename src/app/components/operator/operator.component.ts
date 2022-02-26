import { Component, Injectable, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Services } from 'app/services';
import { Card } from 'app/typings';
import { cards } from '../../mockData';
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
export class OperatorComponent {
  cards: Card[];
  card: Card;

  checkoutForm = this.formBuilder.group({
    phoneNumber: '',
    amountOfMoney: '',
  });

  // data = new FormGroup({
  //   phoneNumber: new FormControl(''),
  //   amountOfMoney: new FormControl(''),
  // });

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private services: Services,
    public snackBar: MatSnackBar
  ) {
    this.cards = cards;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.card = this.getSingleCardForm(id);
  }

  getSingleCardForm(id: number) {
    const card = this.cards.filter((item) => item.id === id);
    return card ? card[0] : card[0];
  }

  submitForm() {
    // console.log(this.checkoutForm.value);
    const data = this.checkoutForm.value;
    this.services.sendFormData(data).then((res) =>
      this.snackBar.openFromComponent(SnackbarComponent, {
        duration: 5000,
        data: `${res.data.message}: ${res.data.sent.amountOfMoney}₽ for ${res.data.sent.phoneNumber}.
       You will be redirected to main page in 5 seconds`,
      })
    );
  }
}
