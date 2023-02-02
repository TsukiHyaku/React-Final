import { useContext } from "react";
import React from "react";
import { cartContext } from "../../storage/cartContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";

function CartWidget() {
  const valueContext = useContext(cartContext);
  const totalItems = valueContext.totalItemsInCartfn();

  return (
    <Link to="/cart" className="card-Link">
    <div>
      <span>🛒</span>
      {totalItems > 0 && <span>{totalItems}</span>}
    </div>
    </Link>
  );
}

export default CartWidget;
