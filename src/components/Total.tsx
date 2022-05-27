import React, { useContext } from 'react';
import { CartContext } from '../providers/CartProvider';

export const Total: React.FC = () => {
  console.log('Total');
  const { listItems } = useContext(CartContext);

  // 合計数量の計算
  const totalQuantity = listItems
    .map((listItem) => listItem.quantity)
    .reduce((total, current) => total + current);

  // 合計金額の計算
  const totalPrice = listItems
    .map((listItem) => listItem.quantity * listItem.unitPrice)
    .reduce((total, current) => total + current);

  return (
    <div className="flex flex-wrap max-w-sm">
      <div className="p-2">{totalQuantity}個</div>
      <div className="p-2">{totalPrice}円(税込)</div>
    </div>
  );
};
