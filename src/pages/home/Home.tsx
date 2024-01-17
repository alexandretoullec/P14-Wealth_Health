import React, { useState } from "react";
import "./home.scss";
import DatePickerComp from "../../components/datePicker/DatePickerComp";
import Modal from "../../components/modal/Modal";
import SimpleInput from "../../components/simpleInput/SimpleInput";

const Home = () => {
  //modal useState
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="container">
      <h1>Create employee</h1>
      <form
        className="formContent"
        action="submit"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="formSide">
          <div className="leftSide">
            <SimpleInput labelName="First Name" type="text" />
            <DatePickerComp />
            <div className="inputCard">
              <label className="label" htmlFor="">
                Last Name
              </label>
              <input id="" type="text" placeholder="" />
            </div>
            <div className="inputCard">
              <label className="label" htmlFor="">
                Date of Birth
              </label>
              <input id="" type="text" placeholder="" />
            </div>
            <div className="inputCard">
              <label className="label" htmlFor="">
                Start Date
              </label>
              <input id="" type="text" placeholder="" />
            </div>
            <div className="inputCard">
              <label className="label" htmlFor="">
                Department
              </label>
              <input id="" type="text" placeholder="" />
            </div>
          </div>
          <div className="rightSide">
            <h2>ADRESS</h2>
            <div className="rightContainer">
              <div className="inputCard">
                <label className="label" htmlFor="">
                  Street
                </label>
                <input id="" type="text" placeholder="" />
              </div>
              <div className="inputCard">
                <label className="label" htmlFor="">
                  City
                </label>
                <input id="" type="text" placeholder="" />
              </div>
              <div className="inputCard">
                <label className="label" htmlFor="">
                  State
                </label>
                <input id="" type="text" placeholder="" />
              </div>
              <div className="inputCard">
                <label className="label" htmlFor="">
                  Zip Code
                </label>
                <input id="" type="text" placeholder="" />
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => setOpenModal(!openModal)}
          className="submitButton"
          type="submit"
        >
          Save
        </button>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
      </form>
    </div>
  );
};

export default Home;
