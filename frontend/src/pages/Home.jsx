import React from "react";
import fondo from "../assets/fondo.png";
import products from "../products.json";
import { Card } from "../components/Card";
import "../css/home.css";

export const Home = () => {
  console.log(products);
  return (
    <div className="home">
      <div className=" container home-img">
        <img src={fondo} alt="logo-centro"/>
      </div>
      <div className="home-products">
        <div className="container py-5">
          <div className="row">
            {products.map((product, index) => (
              <div className="col-12 col-sm-6 col-md-4 my-2 d-flex justify-content-center">
                <Card
                  key={index}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  back={product.back}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
