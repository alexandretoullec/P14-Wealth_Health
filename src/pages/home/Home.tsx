import React, { useState } from "react";
import "./home.scss";
import DatePickerComp from "../../components/datePicker/DatePickerComp";
// import Modal from "../../components/modal/Modal";
import moment from "moment";
// import SimpleContainer from "../../components/simpleInput/simpleContainer";
// import DropdownMenu from "../../components/dropDownMenu/DropdownMenu";
// import { dataDepartment } from "../../data/data.js";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import Select from "react-select";
import styles from "./Form.module.scss";
import { useAppContext } from "../../contexts/AppContext.js";
import { states } from "../../data/statesList";
import { department } from "../../data/department";

// import { Modal, useModal } from "alexandretoullec-react-ts-modal";
import { Modal, useModal } from "alexandretoullec-react-ts-modal";
import "alexandretoullec-react-ts-modal/dist/index.css";

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    borderRadius: "5px",
    background: "white",
    border: "none",
    boxShadow: "0 0 10px #dddddd",
    width: "175.38px",
    minHeight: "initial",
  }),
  input: (provided: any) => ({
    ...provided,
    margin: "0",
    background: "transparent",
    border: "none",
    boxShadow: "none",
  }),
};
const Home = () => {
  const { isOpen, openModal, closeModal, handleEscClose } = useModal();

  // Calculating the maximum date for the date of birth field
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);
  const todayDate = new Date();

  // React Hook Form setup
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  // Accessing the AppContext to dispatch actions
  const { dispatch } = useAppContext();

  // Form submission handler
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    dispatch({ type: "ADD_EMPLOYEE", payload: data });
    // setOpenModal(!openModal);
    openModal();
  };

  return (
    <div className="container">
      <h1>Create employee</h1>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className="formSide">
          <div className="leftSide">
            <div className={styles.form__field}>
              {/* Label for the first name */}
              <label htmlFor="firstName">First Name </label>
              {/* Input for the first name */}
              <input
                {...register("firstName", { required: true })}
                className={
                  // Applies an error class if an error is present
                  errors.firstName
                    ? styles.form__input__error
                    : styles.form__input
                }
                id="firstName"
              />
              {/* Displays an error message if the first name is required and not provided */}
              {errors.firstName && (
                <span className={styles.form__field__error}>
                  This field is required
                </span>
              )}
            </div>
            <div className={styles.form__field}>
              {/* Label for last name */}
              <label htmlFor="lastName">Last Name</label>
              {/* Input for last name */}
              <input
                {...register("lastName", { required: true })}
                className={
                  // Applies an error class if an error is present
                  errors.lastName
                    ? styles.form__input__error
                    : styles.form__input
                }
                id="lastName"
              />
              {/* Displays an error message if the first name is required and not provided */}
              {errors.lastName && (
                <span className={styles.form__field__error}>
                  This field is required
                </span>
              )}
            </div>

            <div className={styles.form__field}>
              {/* Label for Date of Birth */}
              <label htmlFor="birthdate">Date of Birth</label>
              {/* React Hook Form Controller for Date of Birth */}
              <DatePickerComp labelName="" type="number" />
              <Controller
                control={control}
                name="birthDate"
                rules={{ required: true }}
                render={({ field }) => (
                  // DatePicker component for selecting the date
                  <DatePicker
                    placeholderText="Select date"
                    onChange={(date) => {
                      // Format the selected date using moment.js
                      const formattedDate = moment(date).format("DD/MM/YYYY");
                      // Trigger the onChange event with the formatted date
                      field.onChange(formattedDate);
                    }}
                    selected={
                      // Set the selected date from the form field value, if available
                      field.value
                        ? moment(field.value, "DD/MM/YYYY").toDate()
                        : null
                    }
                    maxDate={maxDate}
                    dateFormat="dd/MM/yyyy"
                    className={
                      // Apply styling based on the presence of errors
                      errors.birthDate
                        ? styles.form__input__error
                        : styles.form__input
                    }
                    id="birthdate"
                    showYearDropdown
                    scrollableYearDropdown
                  />
                )}
              />
              {/* Display error message if Date of Birth is required and not provided */}
              {errors.birthDate && (
                <span className={styles.form__field__error}>
                  This field is required
                </span>
              )}
            </div>
            {/* <DatePickerComp labelName="Date of Birth" type="date" /> */}
            <div className={styles.form__field}>
              {/* Label for start date */}
              <label htmlFor="startdate">Start Date</label>
              {/* React Hook Form Controller for Start Date */}
              <Controller
                control={control}
                name="startDate"
                rules={{ required: true }}
                render={({ field }) => (
                  // DatePicker component for selecting the start date
                  <DatePicker
                    placeholderText="Select date"
                    onChange={(date) => {
                      // Format the selected date using moment.js
                      const formattedDate = moment(date).format("DD/MM/YYYY");
                      // Trigger the onChange event with the formatted date
                      field.onChange(formattedDate);
                    }}
                    selected={
                      // Set the selected date from the form field value, if available
                      field.value
                        ? moment(field.value, "DD/MM/YYYY").toDate()
                        : null
                    }
                    maxDate={todayDate} // Maximum allowed date (set to today)
                    dateFormat="dd/MM/yyyy" // Date format
                    className={
                      // Apply styling based on the presence of errors
                      errors.startDate
                        ? styles.form__input__error
                        : styles.form__input
                    }
                    showYearDropdown
                    scrollableYearDropdown
                    id="startdate"
                  />
                )}
              />
              {/* Display error message if Start Date is required and not provided */}
              {errors.startDate && (
                <span className={styles.form__field__error}>
                  This field is required
                </span>
              )}
            </div>

            <div className={styles.form__field}>
              {/* Label for the Department selection */}
              <label htmlFor="department">Department</label>
              {/* Controller for managing Department selection with react-hook-form */}
              <Controller
                name="selectDepartment"
                control={control}
                defaultValue={undefined}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  // Select component for choosing the Department
                  <Select
                    options={department}
                    onChange={(selectedOption) => onChange(selectedOption)}
                    value={department.find((item) => item.value === value)}
                    isClearable={true}
                    styles={customStyles}
                    instanceId={"department"}
                    inputId="department"
                  />
                )}
              />
              {/* Display an error message if the Department selection is required and not provided */}
              {errors.selectDepartment && (
                <span className={styles.form__field__error}>
                  This field is required
                </span>
              )}
            </div>

            {/* <SimpleContainer labelName="First Name" type="text" /> */}
            {/* <SimpleContainer labelName="Last Name" type="text" /> */}

            {/* <DatePickerComp labelName="Start Date" type="date" /> */}
            {/* <DropdownMenu data={dataDepartment} /> */}
          </div>
          <div className="rightSide">
            <fieldset className={styles.fieldset}>
              {/* Legend for the fieldset indicating the section is for address information */}
              <legend>Address</legend>
              <div className={styles.form__field}>
                {/* Label for the Street input field */}
                <label htmlFor="street">Street</label>

                {/* Input for the Street with registration and validation */}
                <input
                  {...register("street", { required: true })}
                  className={
                    // Apply error styling if there are validation errors
                    errors.street
                      ? styles.form__input__error
                      : styles.form__input
                  }
                  id="street"
                />

                {/* Display an error message if the Street field is required and not provided */}
                {errors.street && (
                  <span className={styles.form__field__error}>
                    This field is required
                  </span>
                )}
              </div>

              <div className={styles.form__field}>
                {/* Label for the City input field */}
                <label htmlFor="city">City</label>

                {/* Input for the City with registration and validation */}
                <input
                  {...register("city", { required: true })}
                  className={
                    // Apply error styling if there are validation errors
                    errors.city ? styles.form__input__error : styles.form__input
                  }
                  id="city"
                />

                {/* Display an error message if the City field is required and not provided */}
                {errors.city && (
                  <span className={styles.form__field__error}>
                    This field is required
                  </span>
                )}
              </div>

              <div className={styles.form__field}>
                {/* Label for the State selection */}
                <label htmlFor="state">State</label>
                {/* Controller for managing State selection with react-hook-form */}
                <Controller
                  name="selectState"
                  control={control}
                  defaultValue={undefined}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    // Select component for choosing the State
                    <Select
                      options={states}
                      onChange={(selectedOption) => onChange(selectedOption)}
                      value={states.find((state) => state.value === value)}
                      isClearable={true}
                      styles={customStyles}
                      instanceId={"state"}
                      inputId="state"
                    />
                  )}
                />
                {/* Display an error message if the State selection is required and not provided */}
                {errors.selectState && (
                  <span className={styles.form__field__error}>
                    This field is required
                  </span>
                )}
              </div>

              <div className={styles.form__field}>
                {/* Label for the "Zip Code" input field */}
                <label htmlFor="zipCode">Zip Code</label>
                {/* Input field for the Zip Code with registration and validation */}
                <input
                  {...register("zipCode", {
                    valueAsNumber: true,
                    required: true,
                  })}
                  className={
                    // Apply error styling if there are validation errors
                    errors.zipCode
                      ? styles.form__input__error
                      : styles.form__input
                  }
                  type="number"
                  id="zipCode"
                />
                {/* Display an error message if the Zip Code field is required and not provided */}
                {errors.zipCode && (
                  <span className={styles.form__field__error}>
                    This field is required
                  </span>
                )}
              </div>
            </fieldset>
            {/* <h2>ADRESS</h2>
            <div className="rightContainer">
              <SimpleContainer labelName="Street" type="text" />
              <SimpleContainer labelName="City" type="text" />
              <DropdownMenu data={states} />
              <SimpleContainer labelName="Zip Code" type="number" />
            </div> */}
          </div>
        </div>
        <input type="submit" value="Save" className={styles.btn} />
        {/* <button
          onClick={() => setOpenModal(!openModal)}
          className="submitButton"
          type="submit"
        >
          Save
        </button> */}
      </form>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        textContent="Employee successfully created!"
        modalClass={styles.modal__custom}
        handleEscClose={handleEscClose}
      />
    </div>
  );
};

export default Home;
