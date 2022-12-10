import React, { useState, useEffect } from "react";
import getItems from "../../services/mockService";
import ItemList from "./ItemList";

function ItemListContainer() {
  console.log("%cRender/update", "color: green");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getItems().then((respuesta) => setProducts(respuesta));
  }, []);

  return <ItemList products={products} />;
}

export default ItemListContainer;
