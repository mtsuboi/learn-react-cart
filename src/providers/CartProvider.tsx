import React, { createContext, ReactNode, useState } from 'react';
import { getItems } from '../controllers/itemController';
import { getCartItems } from '../controllers/cartController';
import { IListItem } from '../models/IListItem';

export const CartContext = createContext(
  {} as {
    listItems: IListItem[];
    setListItemQuantity: (itemId: number, quantity: number) => void;
  }
);

type Props = {
  children: ReactNode;
};

export const CartProvider: React.FC<Props> = (props) => {
  const { children } = props;

  // データ読み込み
  const initialItems = getItems();
  const initialCartItems = getCartItems();

  // ItemsとCartItemsを結合してステートを作成
  const initialListItems = initialItems.map((item) => {
    const cartItem = initialCartItems.find(
      (cartItem) => cartItem.itemId === item.itemId
    );
    return {
      ...item,
      quantity: cartItem?.quantity ?? 0,
    };
  });
  const [listItems, setListItems] = useState(initialListItems);

  // コンポーネントに渡すonChangeハンドラー
  const setListItemQuantity = (itemId: number, quantity: number) => {
    // 変更したアイテムを更新してステートにセット
    setListItems(
      listItems.map((listItem) =>
        itemId === listItem.itemId
          ? {
              itemId: listItem.itemId,
              itemName: listItem.itemName,
              unitPrice: listItem.unitPrice,
              quantity,
            }
          : listItem
      )
    );
  };

  return (
    <CartContext.Provider value={{ listItems, setListItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
