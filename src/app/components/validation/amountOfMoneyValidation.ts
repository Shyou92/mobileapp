export default function amountofMoneyValidation(data: any) {
  const { amountOfMoney } = data;
  if (amountOfMoney >= 1 && amountOfMoney <= 1000) {
    return true;
  }
  return false;
}
