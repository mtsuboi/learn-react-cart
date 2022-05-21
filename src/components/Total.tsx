import React from 'react';
import { IListItem } from '../models/IListItem';

type Props = {
  listItems: IListItem[];
};

export const Total: React.FC<Props> = ({ listItems }) => {
  // 合計数量の計算
  const totalQuantity = listItems
    .map((listItem) =>
      listItem.quantity === '' ? 0 : parseInt(listItem.quantity)
    )
    .reduce((total, current) => total + current);

  // 合計金額の計算
  const totalPrice = listItems
    .map((listItem) =>
      listItem.quantity === ''
        ? 0
        : parseInt(listItem.quantity) * listItem.unitPrice
    )
    .reduce((total, current) => total + current);

  return (
    <div className="flex flex-wrap max-w-sm">
      <div className="p-2">{totalQuantity}個</div>
      <div className="p-2">{totalPrice}円(税込)</div>
    </div>
  );
};
