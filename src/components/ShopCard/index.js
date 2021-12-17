import React from "react";
import PropTypes from "prop-types";

export default function ShopCard({ cards, index }) {
  return (
    <div className="shop-card">
      <h3>{cards.name}</h3>
      <p>{cards.color}</p>
      <img src={cards.img} alt="one-ked{index}" />
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

ShopCard.defaultProps = {
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

ShopCard.propTypes = {
  cards: PropTypes.object.isRequired
};
