import React from "react";
import products from "../products.json";
import { Card } from "../components/Card";

//redux
import { useDispatch } from "react-redux";
import { addCar } from "../features/car/carSlice.js";

const Products = () => {
  const dispatch = useDispatch();

  const addId = (id) => {
    const item = products[id-1];
    dispatch(addCar(item));
  };

  return (
    <div className="container-products mb-5">
      <div className="container">
        <h1 className="text-center my-5">PRODUCTOS</h1>
        <div className="row">
          {products.map((product, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 my-3 d-flex justify-content-center"
            >
              <Card
                id={product.id}
                title={product.title}
                price={product.price}
                back={product.back}
                addId={addId}
              />
            </div>
          ))}
          {products.map((product, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 my-2 d-flex justify-content-center"
            >
              <Card
                id={product.id}
                title={product.title}
                price={product.price}
                back={product.back}
                addId={addId}
              />
            </div>
          ))}
          {products.map((product, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 my-2 d-flex justify-content-center"
            >
              <Card
                id={product.id}
                title={product.title}
                price={product.price}
                back={product.back}
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
