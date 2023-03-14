import React from "react";
import { Dataset } from "../data";
import IceProduct from "../Components/iceProduct";

function ProductsPage() {
  const iceData = Dataset.map((data) => {
    return (
      <IceProduct
        key={data.key}
        image={data.img}
        name={data.name}
        subhead={data.subhead}
        description={data.description}
        rating={data.rating}
        rating_count={data.rating_count}
        ingredients={data.ingredients}
      />
    );
  });

  return (
    <div className="productsPage">
      <div>
        <h1 className="h-primary">Products Page</h1>
        <div className="product-container">
        {iceData}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
