import { Card } from 'app/typings';

export default function phoneValidate(data: any, card: Card) {
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
