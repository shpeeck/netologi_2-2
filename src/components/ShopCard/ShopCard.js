import React from "react";

export default function ShopCard({ cards, index }) {
  console.log(cards);
  return (
    <div className="shop-card">
      <h3>{cards.name}</h3>
      <p>{cards.color}</p>
      <img src={cards.img} alt="one-ked{index}"></img>
      <div className="chop-card_prise">
        <p>
          <span>$</span>
          {cards.price}
        </p>
        <button>ADD TO CARD</button>
      </div>
    </div>
  );
}
