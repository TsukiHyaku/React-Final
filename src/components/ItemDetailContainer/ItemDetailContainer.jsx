import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../services/mockService";
import { useParams } from "react-router-dom";
import "./itemdetail.css";

function ItemDetailContainer() {
  const [Item, setItem] = useState([]);
  
  let { itemID } = useParams();

  async function getData(){
    let respuesta = await getSingleItem(itemID)
    setItem(respuesta)
  }

  useEffect( () =>{
    getData();
  }, [])
  
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
    </div>
  );
}

export default ItemDetailContainer;
