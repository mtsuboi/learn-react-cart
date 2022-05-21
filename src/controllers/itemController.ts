import { IItem } from '../models/IItem';

// Item（商品マスタ）のダミーデータを返す
const dummyItems: IItem[] = [
  {
    itemId: 1,
    itemName: 'メロンパン',
    unitPrice: 130,
  },
  {
    itemId: 2,
    itemName: 'チョココロネ',
    unitPrice: 100,
  },
  {
    itemId: 3,
    itemName: 'カレーパン',
    unitPrice: 160,
  },
];

export const getItems = () => {
  return dummyItems;
};
