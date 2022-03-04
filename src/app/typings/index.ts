export interface Card {
  img: string;
  id: number;
  name: string;
  codes: number[];
}

export type FormData = {
  phone: number;
  amountOfMoney: number;
};

export type MockFillType = {
  status: number;
  success: boolean;
  data: { sent: FormData; message: string };
};

export type Error = {
  img: string;
  name: string;
  message: string;
};
