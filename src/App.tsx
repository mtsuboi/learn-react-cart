import React from 'react';
import { CartItem } from './components/CartItem';

export const App: React.FC = () => {
  return (
    <>
      <CartItem itemName="メロンパン" unitPrice={130} />
      <CartItem itemName="チョココロネ" unitPrice={100} />
      <CartItem itemName="カレーパン" unitPrice={160} />
    </>
  );
};
