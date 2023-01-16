import React, { useState, useEffect, useContext } from "react";
import { getSingleItem } from "../../services/mockService";
import { Link, useParams } from "react-router-dom";
import "./itemdetail.css";
import ItemCount from "./ItemCount/ItemCount";
import { cartContext } from "../../storage/cartContext";

function ItemDetailContainer() {
  const [Item, setItem] = useState([]);
  const [countInCart, setCountInCart] = useState(0)

  const { addToCart, removeItem } = useContext(cartContext);

  let { itemID } = useParams();

  async function getData(){
    let respuesta = await getSingleItem(itemID)
    setItem(respuesta)
  }

  useEffect( () =>{
    getData();
  }, [])

  function handleAddToCart(count) {
    setCountInCart(count);
    addToCart(Item, count)
}
  
  return (
    <div className="card-detail_main">
      <div className="card-detail_img">
        <img src={Item.img} alt={Item.title} />
      </div>
      <div className="card-detail_detail">
        <h1>{Item.title}</h1>
        <h4 className="priceTag">$ {Item.price}</h4>
        <p>{Item.description}</p>
      </div>
      <ItemCount onAddToCart={handleAddToCart}/>
      <button onClick={()=>removeItem(Item.id)}></button>
      <Link to="/cart">Ir al carrito</Link>
    </div>
  );
}

export default ItemDetailContainer;
