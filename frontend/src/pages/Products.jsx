import React from 'react';
import { Card } from '../components/Card';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice.js';
import { useEffect } from 'react';
import { getProducts } from '../features/products/thunks';

const Products = () => {
  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const addId = (id) => {
    const item = products[id - 1];
    dispatch(addToCart(item));
  };

  return (
    <div className="container-products mb-5">
      <div className="container">
        <h1 className="text-center my-5">PRODUCTOS</h1>
        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 my-3 d-flex justify-content-center">
              <Card
                id={product.id}
                title={product.title}
                price={product.price}
                back={product.back || product.image}
                addId={addId}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
