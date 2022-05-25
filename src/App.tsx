import React, { useState } from 'react';
import { getItems } from './controllers/itemController';
import { getCartItems } from './controllers/cartController';
import { List } from './components/List';
import { Total } from './components/Total';

export const App: React.FC = () => {
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
  const handlerQuantityChange = (itemId: number, quantity: number) => {
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
    <>
      <List listItems={listItems} onChange={handlerQuantityChange} />
      <Total listItems={listItems} />
    </>
  );
};
