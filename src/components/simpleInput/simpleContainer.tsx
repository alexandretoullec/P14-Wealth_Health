import "./simpleContainer.scss";

const SimpleContainer = ({ labelName, type }) => {
  return (
    <div className="inputCard">
      <label typeof={type} className="label" htmlFor="">
        {labelName}
      </label>
      <input id="" type="text" placeholder="" />
    </div>
  );
};

export default SimpleContainer;
