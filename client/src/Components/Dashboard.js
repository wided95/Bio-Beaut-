import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteprod } from "../redux/productSlice";
import Addproduct from "./Addproduct";
import Updateproduct from "./Updateproduct";

const Dashboard = ({ ping, setping }) => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  return (
    <div>
      <Addproduct />

      <div className="list">
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">product name</div>
            <div className="col col-2">price</div>
            <div className="col col-3">category</div>
            <div className="col col-4">action</div>
          </li>

          {products?.map((el) => (
            <li className="table-row">
              <div className="col col-1" data-label="Job Id">
                {el.product_title}
              </div>
              <div className="col col-2" data-label="Customer Name">
                {el.product_price}
              </div>
              <div className="col col-3" data-label="Amount">
                {el.category}
              </div>
              <div className="col col-4" data-label="Payment Status">
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Updateproduct ping={ping} setping={setping} id={el._id} />
                  <button
                    onClick={() => {
                      dispatch(deleteprod(el._id));
                      setping(!ping);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
