import React from "react";
import ShopCard from "../ShopCard/ShopCard";

export default function CardsView({ cards }) {
  // console.log(cards);
  return (
    <div className="cards-view">
      {cards.map((item, index) => {
        console.log(item, index);
        return <ShopCard cards={item} key={index} />;
      })}
    </div>
  );
}
