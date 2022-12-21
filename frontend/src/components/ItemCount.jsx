import React from 'react';
import { useState } from 'react';
import { addToCart } from '../features/cart/cartSlice.js';
import { useDispatch } from 'react-redux';
import '../css/itemCount.css';

const ItemCount = ({ product }) => {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const toAdd = (product) => {
    dispatch(addToCart({ product, quantity: count }));
    setCount(count - count);
  };
  return (
    <div className="d-flex align-items-center gap-2">
      <button className="px-2  btn-primary cart-button" onClick={() => decreaseCount()}>
        -
      </button>
      <span>{count}</span>
      <button className="px-2  btn-primary cart-button" onClick={() => increaseCount()}>
        +
      </button>
      <button className="px-2  btn-primary cart-button" disabled={count < 1} onClick={() => toAdd(product)}>
        Agregar
      </button>
    </div>
  );
};
export default ItemCount;
