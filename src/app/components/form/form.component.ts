import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Card, Error } from '../../typings';
import { cards, error } from '../../mockData';
import noLess from 'app/validation/noLess.validator';
import noMore from 'app/validation/noMore.validate';
import { FormServices } from 'app/services/formServices';
import { SnackbarComponent } from '../snackBar/snackBar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import phoneValidate from 'app/validation/phoneValidate';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  ngOnInit(): void {
    if (Number(this.route.snapshot.paramMap.get('id')) > cards.length) {
      this.router.navigate(['/notfound']);
    }
  }

  cards: Card[];
  card: Card;
  form: FormGroup = new FormGroup({
    phone: new FormControl(''),
    amountOfMoney: new FormControl(''),
  });
  error: Error;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private formServices: FormServices,
    public snackBar: MatSnackBar
  ) {
    this.cards = cards;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.card = formServices.checkOperatorExistance(id);
    this.error = error;
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      phone: [
        '',
        [
          Validators.required,

          Validators.pattern(
            /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm
          ),
          phoneValidate(this.card.codes),
        ],
      ],
      amountOfMoney: ['', [Validators.required, noLess(1), noMore(1000)]],
    });
  }
  submitForm() {
    const data = this.form.value;
    this.formServices
      .sendFormData(data)
      .then((res) => {
        if (res.status === 200) {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 5000,
            data: `${res.data.message}: ${res.data.sent.amountOfMoney}₽ for ${res.data.sent.phone}.
           You will be redirected to main page in 5 seconds`,
          });
          this.form.reset();
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 5000);
        } else {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 5000,
            data: `${res.data.message}: ${res.data.sent.amountOfMoney}₽ for ${res.data.sent.phone}.
             Try again one more time.`,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 5000,
          data: `${err.data.message}: ${err.data.sent.amountOfMoney}₽ for ${err.data.sent.phone}.
         Try again one more time.`,
        });
      });
  }
}
