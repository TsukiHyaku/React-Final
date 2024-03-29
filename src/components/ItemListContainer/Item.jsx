import React from "react";
import ToggleButton from "../ToggleButton/ToggleButton";
import "./item.css";
import { Link } from "react-router-dom";

function Item(props) {
  let urlDetail = `/item/${props.id}`;

  let classNamePrice = `item-price ${props.discount && "offerTag"}`;
  let classNameItem = `card ${props.newProduct ? "item-new" : ""}`;

  return (
    <Link to={urlDetail} className="link-item">
      <div className={classNameItem}>
        <ToggleButton icon="♥" />
        <div className="card-img">
          <img src={props.img} alt="imagen producto"></img>
        </div>
        <div className="card-detail">
          <h2>{props.title}</h2>
          <h4 className={classNamePrice}>
            $ {props.price}

            <br />
            {props.discount && <small>{props.discount}% off</small>}
          </h4>
          <small>{props.description}</small>
        </div>
      </div>
    </Link>
  );
}

export default Item;
