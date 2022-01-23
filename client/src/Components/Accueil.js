import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Caroussel from "./Caroussel";
const Accueil = () => {
  const products = useSelector((state) => state.product.products);
  const [price, setprice] = useState([]);
  useEffect(() => {
    if (products) {
      setprice(
        products.filter(
          (el) => parseFloat(el.product_price) > parseFloat("12,50 €")
        )
      );
    }
  }, [products]);

  return (
    <div className="accueil">
      <div className="accueil-image">
        <Caroussel />
        {/* <img
          style={{ width: "800px", height: "400px", marginLeft: "90px" }}
          src="https://static.wixstatic.com/media/cda177_82bccef6d7fc4f629dfa06e6d4c2484f.jpg/v1/fill/w_581,h_412,al_c,q_80,usm_0.66_1.00_0.01/cda177_82bccef6d7fc4f629dfa06e6d4c2484f.webp"
          alt=""
        /> */}
        <img
          style={{
            width: "300px",
            height: "500px",

            borderRadius: "10px",
          }}
          src="https://static.wixstatic.com/media/cda177_3eed2368a5214fb38ee3f58be63c0c1f.jpg/v1/fill/w_261,h_412,al_c,q_80,usm_0.66_1.00_0.01/cda177_3eed2368a5214fb38ee3f58be63c0c1f.webp"
          alt=""
        />
        <div id="cercle">
          <p>Produits</p>
          <h1>Bio!</h1>
        </div>
      </div>
      <hr></hr>
      <div className="lists">
        {price.map((el) => (
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
      <hr></hr>
      <div className="nous">
        <div>
          <p>Nous suivre</p>
          <div class="wrapper">
            <div class="icon facebook">
              <div class="tooltip">Facebook</div>
              <span>
                <ion-icon name="logo-facebook"></ion-icon>
              </span>
            </div>
            <div class="icon twitter">
              <div class="tooltip">Twitter</div>
              <span>
                <ion-icon name="logo-twitter"></ion-icon>
              </span>
            </div>
          </div>
        </div>
        <div>
          <p style={{ marginLeft: "10px" }}>Nous parler</p>
          <p>01 23 45 67 89</p>
        </div>
        <div>
          <p style={{ marginLeft: "10px" }}>Nous écrire</p>
          <p>info@monsite.fr</p>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
