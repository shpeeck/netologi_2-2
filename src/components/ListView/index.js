import React from "react";
import ShopItem from "../ShopItem";
import PropTypes from "prop-types";

export default function ListView({ cards }) {
  if (!cards.length) return null;
  return (
    <div className="list-view">
      {cards.map((item, index) => {
        return <ShopItem cards={item} key={index} />;
      })}
    </div>
  );
}

ListView.defaultProps = {
  cards: [
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }
  ]
};

ListView.propTypes = {
  cards: PropTypes.array.isRequired
};
