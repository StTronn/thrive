import React from "react";
import "./button.css";

const Button = ({ buttonText, onClick, fontSize, height, width }) => {
  return (
    <div class="false">
      <div
        onClick={onClick}
        class="btn51Btn btn51RipplePrimary btn51Primary"
        style={{ width, height, fontSize }}
      >
        <div class="absolute-center btn51ParentDimension">
          <span class="absolute-center" style={{ padding: "0 25px" }}>
            <span>{buttonText}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

Button.defaultProps = {
  text: '',
  onClick: () => { },
  width: "auto",
  height: "45px",
  fontSize: null,
}

export default Button;
