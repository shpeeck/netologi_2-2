import React from "react";
import PropTypes from "prop-types";

export default function IconSwitch({ icon, onSwitch }) {
  return (
    <div className="icon-wrapper">
      <span className="material-icons" onClick={onSwitch}>
        {icon}
      </span>
    </div>
  );
}

IconSwitch.defaultProps = {
  icon: "view_list"
};

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired
};
