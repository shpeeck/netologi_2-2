import React, { useState } from "react";
import IconSwitch from "../IconSwitch";
import CardsView from "../CardsView";
import ListView from "../ListView";

const products = [
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img:
      "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  },
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img:
      "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  },
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img:
      "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  },
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img:
      "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  },
  {
    name: "Nike free run",
    price: "170",
    color: "black",
    img:
      "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  },
  {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img:
      "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }
];

export default function Store() {
  const [icon, setIcon] = useState("view_list");
  const [cards, setCards] = useState(<CardsView cards={products} />);
  const togle = () => {
    if (icon === "view_list") {
      setIcon("view_module");
      setCards(<ListView cards={products} />);
    } else {
      setIcon("view_list");
      setCards(<CardsView cards={products} />);
    }
  };

  return (
    <div className="container">
      <IconSwitch icon={icon} onSwitch={togle} />
      {cards}
    </div>
  );
}
