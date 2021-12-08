import React from "react";

export default function ShopItem({ cards, index }) {
  console.log(cards);
  return (
    <div className="shop-item">
      <img src={cards.img} alt="one-ked{index}"></img>
      <div className="wrapper">
        <h3>{cards.name}</h3>
      </div>
      <div className="wrapper">
      <p>{cards.color}</p>
      </div>
      <div className="wrapper">
        <p>
          <span>$</span>
          {cards.price}
        </p>
      </div>
      <div className="wrapper">
        <button>ADD TO CARD</button>
      </div>
    </div>
  );
}
