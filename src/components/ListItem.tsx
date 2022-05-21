import React, { ChangeEvent } from 'react';
import { IListItem } from '../models/IListItem';

type Props = {
  listItem: IListItem;
  onChange: (itemId: number, quantity: string) => void;
};

export const ListItem: React.FC<Props> = ({ listItem, onChange }) => {
  const { itemId, itemName, unitPrice, quantity } = listItem;

  // +/-クリック時のカウントアップ・ダウン
  const onClickCount = (quantityAdd: number) => {
    const newQuantity =
      (isNaN(parseInt(quantity)) ? 0 : parseInt(quantity)) + quantityAdd;
    if (newQuantity >= 0 && newQuantity <= 9)
      onChange(itemId, newQuantity.toString());
  };

  // 数量を入力時のonChangeハンドラー
  const handlerQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '' || /^\d$/.test(e.target.value))
      return onChange(itemId, e.target.value);
  };

  return (
    <div className="flex m-2">
      <div className="inline-block w-48">{itemName}</div>
      <div className="inline-block w-32">{unitPrice}円(税込)</div>
      <button
        className="text-white bg-indigo-500 border-0 px-1 focus:outline-none hover:bg-indigo-600 rounded"
        onClick={() => onClickCount(-1)}
      >
        －
      </button>
      <div className="inline-block px-2.5">
        <input
          type="text"
          id="quantity"
          className="w-8 px-2 rounded border border-gray-300 focus:ring-2"
          value={quantity}
          onChange={handlerQuantityChange}
        />
        個
      </div>
      <button
        className="text-white bg-indigo-500 border-0 px-1 focus:outline-none hover:bg-indigo-600 rounded"
        onClick={() => onClickCount(1)}
      >
        ＋
      </button>
    </div>
  );
};
