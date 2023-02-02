import React, { useContext, useState } from "react";
import {
  createBuyOrder,
  createBuyOrder_WithStockControl,
} from "../../services/firebase";
import { cartContext } from "../../storage/cartContext";
import Button from "../Button/Button";
import swal from "sweetalert";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";



function CartContainer( ) {
  const [order, setOrder] = useState(false);
  const [compra, setCompra] = useState (false)

  function cargaCheck(  ) {
    setCompra ( !compra )
  }


  const { cart , deleteCart} = useContext(cartContext);

  function handleCheckout(buyerData) {
    const order = {
      buyer: buyerData,
      items: cart,

      total: 999,
      date: new Date(),
    };

    createBuyOrder_WithStockControl(order).then((id) => {
      setOrder(id);
    });
  }

  if (order)
    return (
      <div>
        <h1>Gracias!</h1>
        <p>Se generó la orden correctamente✅</p>
        <small>Tu id de compra: {order}</small>
      </div>
    );

  return (
    <>
      <h1>Tu Carrito</h1>

      <table className="cartList">
        <thead className="cartList_head">
        <tr className="cartList_row">
            <th>Miniatura</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="cartList_row">
              <td>
                <img height={50} src={item.img} alt={item.title} />
              </td>
              <td>{item.title}</td>
              <td>$ {item.price}</td>
              <td>{item.count}</td>
              <th> ${item.count * item.price} </th>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cartList_detail">
        <h4>El total de tu compra es de $ { } </h4>
        {compra ?
          <CheckoutForm onCheckout={handleCheckout} /> :
          <button onClick={ ( ) => cargaCheck( ) }>Terminar Compra</button>
      }
              <button onClick={ ( ) => deleteCart( ) }>Vaciar Carrito</button>
      </div>
    </>
  );
}


export default CartContainer;
