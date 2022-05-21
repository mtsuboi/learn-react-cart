import { ICartItem } from '../models/ICartItem';

// CartItems（カート内の商品）のダミーデータ
const dummyCartItems: ICartItem[] = [];

export const getCartItems = () => {
  return dummyCartItems;
};
