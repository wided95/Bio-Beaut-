import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateprod } from "../redux/productSlice";

const Updateproduct = ({ id, ping, setping }) => {
  const [product, setproduct] = useState({});
  const [show, setshow] = useState(false);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => setshow(!show)}>Update</button>
      {show ? (
        <div class="modal-bg update">
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
                dispatch(updateprod({ id: id, product }));
                setping(!ping);
                setshow(!show);
              }}
            >
              Modifier produit
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Updateproduct;
