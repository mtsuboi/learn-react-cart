import React from 'react';
import { CartProvider } from './providers/CartProvider';
import { List } from './components/List';
import { Total } from './components/Total';
import { Header } from './components/Header';

export const App: React.FC = () => {
  console.log('App');
  return (
    <>
      <Header />
      <CartProvider>
        <List />
        <Total />
      </CartProvider>
    </>
  );
};
