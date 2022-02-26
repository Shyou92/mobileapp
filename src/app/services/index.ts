import { Injectable } from '@angular/core';
import { FormData, MockFillType } from 'app/typings';

@Injectable({
  providedIn: 'root',
})
export class Services {
  public sendFormData(data: FormData): Promise<MockFillType> {
    const randomNumber = Math.floor(Math.random() * (10 - 1)) + 1;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (randomNumber > 2) {
          resolve({
            status: 200,
            success: true,
            data: { sent: data, message: 'Payment is successful' },
          });
        } else {
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
