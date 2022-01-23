import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { addprod } from "../redux/productSlice";
const Addproduct = ({ ping, setping }) => {
  const dispatch = useDispatch();
  const [product, setproduct] = useState({
    product_image: "",
    product_title: "",
    product_price: "",
    category: "",
    product_desc: "",
    product_rate: "",
  });
  const [show, setshow] = useState(false);
  return (
    <div className="add">
      <button onClick={() => setshow(!show)}>Ajouter Produit</button>
      {show ? (
        <div class="modal-bg">
          <div className="modal-body" style={{ position: "relative" }}>
            <i
              class="material-icons"
              style={{
                position: "absolute",
                top: "-30px",
                left: "660px",
                right: "10px",
                cursor: "pointer",
              }}
              onClick={() => setshow(!show)}
            >
              X
            </i>
            <input
              type="text"
              placeholder="Nom produit"
              onChange={(e) =>
                setproduct({ ...product, product_title: e.target.value })
              }
            ></input>
            <input
              type="text"
              placeholder="image produit"
              onChange={(e) =>
                setproduct({ ...product, product_image: e.target.value })
              }
            ></input>
            <input
              type="text"
              placeholder="description produit"
              onChange={(e) =>
                setproduct({ ...product, product_desc: e.target.value })
              }
            ></input>
            <input
              type="text"
              placeholder="Prix produit"
              onChange={(e) =>
                setproduct({ ...product, product_price: e.target.value })
              }
            ></input>
            <input
              type="text"
              placeholder="categorie produit"
              onChange={(e) =>
                setproduct({ ...product, category: e.target.value })
              }
            ></input>
            <input
              type="text"
              placeholder="rate produit"
              onChange={(e) =>
                setproduct({ ...product, product_rate: e.target.value })
              }
            ></input>
            {/*<select onChange={(e) =>setproduct({...product, category:e.target.value})}>
              <option value="soins">soins</option>
              <option value="maison">maison</option>
            </select>*/}
            <button
              onClick={() => {
                dispatch(addprod(product));
                setping(!ping);
                setshow(!show);
              }}
            >
              Ajouter Produit
            </button>
          </div>
        </div>
      ) : null}
     
    </div>
  );
};

export default Addproduct;
