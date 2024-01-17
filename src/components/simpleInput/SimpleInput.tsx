import React from "react";
import "./simpleInput.scss";

const SimpleInput = ({ labelName, type }) => {
  return (
    <div className="inputCard">
      <label typeof={type} className="label" htmlFor="">
        {labelName}
      </label>
      <input id="" type="text" placeholder="" />
    </div>
  );
};

export default SimpleInput;
