import React from 'react';
import { ListItem } from './ListItem';
import { IListItem } from '../models/IListItem';

type Props = {
  listItems: IListItem[];
  onChange: (itemId: number, quantity: string) => void;
};

export const List: React.FC<Props> = ({ listItems, onChange }) => {
  // リストのレンダリング
  const itemList = listItems.map((listItem) => {
    return (
      <ListItem key={listItem.itemId} listItem={listItem} onChange={onChange} />
    );
  });

  return <>{itemList}</>;
};
