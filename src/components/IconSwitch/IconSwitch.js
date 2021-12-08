import React from "react";

export default function IconSwitch({ icon, onSwitch }) {
  // console.log("111", icon);
  return (
    <div className="icon-wrapper">
      <span className="material-icons" onClick={onSwitch}>
        {icon}
      </span>
    </div>
  );
}
