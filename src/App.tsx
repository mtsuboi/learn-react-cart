import React from 'react';
import { CartProvider } from './providers/CartProvider';
import { List } from './components/List';
import { Total } from './components/Total';

export const App: React.FC = () => {
  console.log('App');
  return (
    <>
      <CartProvider>
        <List />
        <Total />
      </CartProvider>
    </>
  );
};
