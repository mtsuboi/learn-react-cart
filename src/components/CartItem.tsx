import React, { ChangeEvent, useState } from 'react';

type Props = {
  itemName: string;
  unitPrice: number;
};

export const CartItem: React.FC<Props> = ({ itemName, unitPrice }) => {
  const [quantity, setQuantity] = useState('0');
  const onClickCount = (quantityAdd: number) => {
    const newQuantity = (quantity ? parseInt(quantity) : 0) + quantityAdd;
    if (newQuantity >= 0 && newQuantity <= 9)
      setQuantity(newQuantity.toString());
  };
  const onQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (
      !e.target.value ||
      (e.target.value.length === 1 &&
        e.target.value >= '0' &&
        e.target.value <= '9')
    )
      return setQuantity(e.target.value);
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
          className="w-8 px-2 rounded border border-gray-300 focus:ring-2"
          value={quantity}
          onChange={onQuantityChange}
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
