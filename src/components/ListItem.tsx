import React from 'react';
import { IListItem } from '../models/IListItem';
import { NumberInput } from './NumberInput';

type Props = {
  listItem: IListItem;
  onChange: (itemId: number, quantity: number) => void;
};

export const ListItem: React.FC<Props> = ({ listItem, onChange }) => {
  const { itemId, itemName, unitPrice, quantity } = listItem;

  // 数量入力時のハンドラー
  const setValue = (value: number) => onChange(itemId, value);

  return (
    <div className="flex m-2">
      <div className="inline-block w-48">{itemName}</div>
      <div className="inline-block w-32">{unitPrice}円(税込)</div>
      <NumberInput value={quantity} unitStr="個" setValue={setValue} />
    </div>
  );
};
