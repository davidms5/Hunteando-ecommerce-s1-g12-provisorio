import React from 'react';
import { Card } from '../components/Card';
import '../css/products.css';
import Loading from '../components/Loading';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../features/products/thunks';

const Products = () => {
  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      {products.length === 0 ? (
        <Loading />
      ) : (
        <div className="container-products pb-5">
          <div className="container">
            <h1 className="text-center py-4">PRODUCTOS</h1>
            <div className="row">
              {products.map((product, index) =>
                product.IMAGEN ? (
                  <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 my-3 d-flex justify-content-center">
                    <Card product={product} />
                  </div>
                ) : (
                  ''
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
