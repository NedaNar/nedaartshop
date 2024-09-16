import React, { useEffect, useState } from "react";
import { ProductType } from "../../utils/ProductType";
import PRODUCTS_DATA from "../../utils/Products";
import { useNavigate } from "react-router";

export default function ProductsLayout() {
  const [selectedType, setSelectedType] = useState<ProductType | null>(null);
  const navigate = useNavigate();

  const filteredProducts = selectedType
    ? PRODUCTS_DATA.filter((product) => product.type === selectedType)
    : PRODUCTS_DATA;

  return (
    <div>
      <div className="container">
        <div className="row" style={{ margin: "3.2rem 1.6rem 2.4rem" }}>
          <button
            className="btn-large"
            style={{ margin: "0 0.4rem" }}
            onClick={() => setSelectedType(null)}
          >
            All
          </button>
          {Object.values(ProductType).map((type) => (
            <button
              key={type}
              className="btn-large"
              style={{ margin: "0 0.4rem" }}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="row">
          {filteredProducts.length != 0 &&
            filteredProducts.map((product) => (
              <div key={product.id} className="col s12 m6 l4">
                <div className="card">
                  <div className="card-image ">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="card-content">
                    <span className="card-title">{product.name}</span>
                    <p>Price: ${product.price.toFixed(2)}</p>
                  </div>
                  <div className="card-action">
                    <button
                      className="btn-flat"
                      style={{ margin: "0 0.4rem" }}
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      View more
                    </button>
                    <button className="btn-small  teal lighten-2">
                      <i className="material-icons right">shopping_cart</i>Add
                      to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {filteredProducts.length == 0 && (
            <div>
              <h5 style={{ margin: "6.4rem 0 1.6rem" }}>
                No products found :(
              </h5>
              <button
                className="btn-flat"
                onClick={() => setSelectedType(null)}
              >
                View All
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
