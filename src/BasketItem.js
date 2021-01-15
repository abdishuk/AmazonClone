import React from "react";
import "./Basket.css";
import { useStateValue } from "./StateProvider.js";
function BasketItem({ item }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    console.log("remove button clicked");
    // remove from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: item.id,
    });
  };
  return (
    <div className="basket-item">
      <img src={item.image} alt="productImage" />
      <div className="item__info">
        <p className="title">{item.title}</p>
        <p className="item__price">
          <small>$</small>
          <strong>{item.price}</strong>
        </p>
        <div className="product__rating">
          {Array(item.rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={removeFromBasket} className="remove-btn">
          Remove From Basket
        </button>
      </div>
    </div>
  );
}

export default BasketItem;
