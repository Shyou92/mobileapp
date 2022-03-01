import { Injectable } from '@angular/core';
import { Card, FormData, MockFillType } from '../typings';
import { MatSnackBar } from '@angular/material/snack-bar';
import { cards } from 'app/mockData';

@Injectable({
  providedIn: 'root',
})
export class FormServices {
  constructor(public snackBar: MatSnackBar) {}

  public checkOperatorExistance(id: number | undefined): Card {
    // if (id === undefined) {
    //   return {
    //     img: 'default',
    //     id: 0,
    //     name: 'default',
    //     codes: [],
    //   };
    // }
    const card = cards.filter((item) => item.id === id);
    return card[0];
  }

  public sendFormData(data: FormData): Promise<MockFillType> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.getRandomNumber() > 2) {
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

  private getRandomNumber() {
    return Math.floor(Math.random() * 10 + 1);
  }
}
