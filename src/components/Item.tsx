import React, { memo } from 'react';

type Props = {
  itemName: string;
  unitPrice: number;
};

// eslint-disable-next-line react/display-name
export const Item: React.FC<Props> = memo(({ itemName, unitPrice }) => {
  console.log('Item');
  return (
    <>
      <div className="inline-block w-48">{itemName}</div>
      <div className="inline-block w-32">{unitPrice}円(税込)</div>
    </>
  );
});
