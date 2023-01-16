import React from "react";
import ToggleButton from "../ToggleButton/ToggleButton";
import "./item.css";
import { Link } from "react-router-dom";

function Item(props) {
  let urlDetail = `/item/${props.id}`;

  return (

      <div className="card">
        <ToggleButton icon="♥" />
        <Link to={urlDetail} className="link-item">
        <div className="card-img">
          <img src={props.img} alt="imagen producto"></img>
        </div>
        <div className="card-detail">
          <h2>{props.title}</h2>
          <h4 className="priceTag">$ {props.price}</h4>
          <small>{props.description}</small>
        </div>
        </Link>
      </div>

  );
}

export default Item;
