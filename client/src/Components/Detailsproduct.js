import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReactStars from "react-stars";
const Detailsproduct = () => {
  const params = useParams();

  const products = useSelector((state) => state.product.products);
  const prod = products.find((el) => el._id == params.id);
  console.log(products);
  console.log(prod);
  return (
    <div className="detail">
      <img src={prod.product_image} />
      <div>
        <h1>{prod.product_title}</h1>
        <p>{prod.product_desc}</p>
        <h5>{prod.product_price}</h5>
        <ReactStars
          count={5}
          size={20}
          value={parseInt(prod.product_rate)}
          edit={false}
          activeColor="#ffd700"
          className="stars"
        />
      </div>
    </div>
  );
};

export default Detailsproduct;
