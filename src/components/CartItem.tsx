import React, { ChangeEvent, useState } from 'react';

type Props = {
  itemName: string;
  unitPrice: number;
};

const itemNameStyle = {
  display: 'inline-block',
  width: '200px',
};

const unitPriceStyle = {
  display: 'inline-block',
  width: '130px',
};

const quantityStyle = {
  display: 'inline-block',
  padding: '0 10px',
};

const quantityInputStyle = {
  width: '20px',
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
    <div style={{ display: 'flex' }}>
      <div style={itemNameStyle}>{itemName}</div>
      <div style={unitPriceStyle}>{unitPrice}円(税込)</div>
      <button onClick={() => onClickCount(-1)}>－</button>
      <div style={quantityStyle}>
        <input
          type="text"
          style={quantityInputStyle}
          value={quantity}
          onChange={onQuantityChange}
        />
        個
      </div>
      <button onClick={() => onClickCount(1)}>＋</button>
    </div>
  );
};
