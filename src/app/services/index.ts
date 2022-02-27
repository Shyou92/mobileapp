import { Injectable } from '@angular/core';
import { Card, FormData, MockFillType } from 'app/typings';

@Injectable({
  providedIn: 'root',
})
export class Services {
  constructor() {}

  public sendFormData(
    data: FormData,
    card: Card,
    isValid: Boolean
  ): Promise<MockFillType> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.phoneValidate(data, card) && this.amountValidate(data)) {
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

  public phoneValidate(data: any, card: Card) {
    const { codes } = card;

    const { phoneNumber } = data;
    const phoneNumberSubstr = phoneNumber.slice(1, 5);
    return codes.find((item: any) => {
      if (phoneNumberSubstr.includes(item.toString())) {
        return true;
      } else {
        return false;
      }
    });
  }

  public amountValidate(data: any) {
    const { amountOfMoney } = data;
    if (amountOfMoney >= 1 && amountOfMoney <= 1000) {
      return true;
    }
    return false;
  }
}
