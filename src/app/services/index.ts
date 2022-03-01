import { Injectable } from '@angular/core';
import { Card, FormData, MockFillType } from '../typings';
import phoneValidate from '../validation/phoneValidate';
import amountofMoneyValidation from '../validation/amountOfMoneyValidation';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class FormServices {
  constructor(public snackBar: MatSnackBar) {}

  public sendFormData(
    data: FormData,
    card: Card,
    isValid: Boolean
  ): Promise<MockFillType> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (phoneValidate(data, card) && amountofMoneyValidation(data)) {
          isValid = true;
          resolve({
            status: 200,
            success: true,
            data: { sent: data, message: 'Payment is successful' },
          });
        } else {
          isValid = false;
          reject({
            status: 500,
            success: false,
            data: { sent: data, message: 'Payment is failed' },
          });
        }
      }, 2000);
    });
  }
}
