export type Card = {
  img: string;
  id: number;
  name: string;
  codes: number[];
};

export type FormData = {
  phoneNumber: number;
  amountOfMoney: number;
};

export type MockFillType = {
  status: number;
  success: boolean;
  data: { sent: FormData; message: string };
};
