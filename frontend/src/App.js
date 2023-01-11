import React from 'react';
import './App.css';
import RoutesComp from './router/Routes';
import { getTotals } from './features/cart/cartSlice';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  return (
    <>
      <RoutesComp />
    </>
  );
}

export default App;
