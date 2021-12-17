import React from "react";
import PropTypes from "prop-types";

export default function ShopItem({ cards, index }) {
  return (
    <div className="shop-item">
      <img src={cards.img} alt="one-ked{index}" />
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

ShopItem.defaultProps = {
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

ShopItem.propTypes = {
  cards: PropTypes.object.isRequired
};
