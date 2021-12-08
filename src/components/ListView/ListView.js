import React from "react";
import ShopItem from "../ShopItem/ShopItem";

export default function ListView({ cards }) {
  // console.log(cards);
  return (
    <div className="list-view">
      {cards.map((item, index) => {
        console.log(item, index);
        return <ShopItem cards={item} key={index} />;
        <br />
      })}
    </div>
  );
}
