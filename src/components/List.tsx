import React, { useContext } from 'react';
import { CartContext } from '../providers/CartProvider';
import { Item } from './Item';
import { NumberInput } from './NumberInput';

export const List: React.FC = () => {
  console.log('List');
  const { listItems, setListItemQuantity } = useContext(CartContext);

  // リストのレンダリング
  const itemList = listItems.map((listItem) => {
    const { itemId, itemName, unitPrice, quantity } = listItem;
    return (
      <div key={itemId} className="flex m-2">
        <Item itemName={itemName} unitPrice={unitPrice} />
        <NumberInput
          value={quantity}
          unitStr="個"
          setValue={(value: number) => setListItemQuantity(itemId, value)}
        />
      </div>
    );
  });

  return <>{itemList}</>;
};
