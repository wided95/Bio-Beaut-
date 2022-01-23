import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Soins = () => {
  const products = useSelector((state) => state.product.products);

  const [soins, setsoins] = useState([]);
  useEffect(() => {
    if (products) {
      setsoins(products.filter((el) => el.category == "soins"));
    }
  }, [products]);

  return (
    <div className="list">
      {soins.map((el) => (
        <div className="card">
          <img src={el.product_image} />
          <hr></hr>
          <Link to={`/detail/${el._id}`}>
            <h5>{el.product_title}</h5>
          </Link>
          <p>{el.product_price}</p>
        </div>
      ))}
    </div>
  );
};

export default Soins;
