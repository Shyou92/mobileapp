import { Injectable } from '@angular/core';
import { Card, FormData, MockFillType } from 'app/typings';

@Injectable({
  providedIn: 'root',
})
export class Services {
  private isValid: Boolean;

  constructor() {
    this.isValid = false;
  }

  public sendFormData(data: FormData, card: Card): Promise<MockFillType> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.formItemValidate(data, card, this.isValid)) {
          this.isValid = true;
          resolve({
            status: 200,
            success: true,
            data: { sent: data, message: 'Payment is successful' },
          });
        } else {
          this.isValid = false;
          reject({
            status: 500,
            success: false,
            data: { sent: data, message: 'Payment is failed' },
          });
        }
      }, 2000);
    });
  }

  private formItemValidate(data: any, card: Card, isValid: Boolean) {
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
}
