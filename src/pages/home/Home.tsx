import React, { useState } from "react";
import "./home.scss";
import DatePickerComp from "../../components/datePicker/DatePickerComp";
import Modal from "../../components/modal/Modal";
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
  //modal useState
  const [openModal, setOpenModal] = useState(false);

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);
  const todayDate = new Date();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const { dispatch } = useAppContext();

  const onSubmit = (data) => {
    console.log(data);
    dispatch({ type: "ADD_EMPLOYEE", payload: data });
    // openModal()
  };

  return (
    <div className="container">
      <h1>Create employee</h1>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form
        className="formContent"
        action="submit"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="formSide">
          <div className="leftSide">
            <div className={styles.form__field}>
              <label htmlFor="firstName">First Name </label>
              <input
                {...register("firstName", { required: true })}
                className={
                  errors.firstName
                    ? styles.form__input__error
                    : styles.form__input
                }
                id="firstName"
              />

              {errors.firstName && (
                <span className={styles.form__field__error}>
                  This field is required
                </span>
              )}
            </div>
            <div className={styles.form__field}>
              <label htmlFor="lastName">Last Name</label>
              <input
                {...register("lastName", { required: true })}
                className={
                  errors.lastName
                    ? styles.form__input__error
                    : styles.form__input
                }
                id="lastName"
              />

              {errors.lastName && (
                <span className={styles.form__field__error}>
                  This field is required
                </span>
              )}
            </div>

            <div className={styles.form__field}>
              <label htmlFor="birthdate">Date of Birth</label>
              <Controller
                control={control}
                name="birthDate"
                rules={{ required: true }}
                render={({ field }) => (
                  <DatePicker
                    placeholderText="Select date"
                    onChange={(date) => {
                      const formattedDate = moment(date).format("DD/MM/YYYY");
                      field.onChange(formattedDate);
                    }}
                    selected={
                      field.value
                        ? moment(field.value, "DD/MM/YYYY").toDate()
                        : null
                    }
                    maxDate={maxDate}
                    dateFormat="dd/MM/yyyy"
                    className={
                      errors.birthDate
                        ? styles.form__input__error
                        : styles.form__input
                    }
                    id="birthdate"
                  />
                )}
              />

              {errors.birthDate && (
                <span className={styles.form__field__error}>
                  This field is required
                </span>
              )}
            </div>
            <div className={styles.form__field}>
              <label htmlFor="startdate">Start Date</label>
              <Controller
                control={control}
                name="startDate"
                rules={{ required: true }}
                render={({ field }) => (
                  <DatePicker
                    placeholderText="Select date"
                    onChange={(date) => {
                      const formattedDate = moment(date).format("DD/MM/YYYY");
                      field.onChange(formattedDate);
                    }}
                    selected={
                      field.value
                        ? moment(field.value, "DD/MM/YYYY").toDate()
                        : null
                    }
                    maxDate={todayDate}
                    dateFormat="dd/MM/yyyy"
                    className={
                      errors.startDate
                        ? styles.form__input__error
                        : styles.form__input
                    }
                    id="startdate"
                  />
                )}
              />

              {errors.startDate && (
                <span className={styles.form__field__error}>
                  This field is required
                </span>
              )}
            </div>

            <fieldset className={styles.fieldset}>
              <legend>Address</legend>
              <div className={styles.form__field}>
                <label htmlFor="street">Street</label>
                <input
                  {...register("street", { required: true })}
                  className={
                    errors.street
                      ? styles.form__input__error
                      : styles.form__input
                  }
                  id="street"
                />

                {errors.street && (
                  <span className={styles.form__field__error}>
                    This field is required
                  </span>
                )}
              </div>

              <div className={styles.form__field}>
                <label htmlFor="city">City</label>
                <input
                  {...register("city", { required: true })}
                  className={
                    errors.city ? styles.form__input__error : styles.form__input
                  }
                  id="city"
                />

                {errors.city && (
                  <span className={styles.form__field__error}>
                    This field is required
                  </span>
                )}
              </div>

              <div className={styles.form__field}>
                <label htmlFor="state">State</label>
                <Controller
                  name="selectState"
                  control={control}
                  defaultValue={undefined}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
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

                {errors.selectState && (
                  <span className={styles.form__field__error}>
                    This field is required
                  </span>
                )}
              </div>

              <div className={styles.form__field}>
                <label htmlFor="zipCode">Zip Code</label>
                <input
                  {...register("zipCode", {
                    valueAsNumber: true,
                    required: true,
                  })}
                  className={
                    errors.zipCode
                      ? styles.form__input__error
                      : styles.form__input
                  }
                  type="number"
                  id="zipCode"
                />

                {errors.zipCode && (
                  <span className={styles.form__field__error}>
                    This field is required
                  </span>
                )}
              </div>
            </fieldset>

            <div className={styles.form__field}>
              <label htmlFor="department">Department</label>
              <Controller
                name="selectDepartment"
                control={control}
                defaultValue={undefined}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
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

              {errors.selectDepartment && (
                <span className={styles.form__field__error}>
                  This field is required
                </span>
              )}
            </div>

            {/* <SimpleContainer labelName="First Name" type="text" /> */}
            {/* <SimpleContainer labelName="Last Name" type="text" /> */}
            <DatePickerComp labelName="Date of Birth" type="date" />
            {/* <DatePickerComp labelName="Start Date" type="date" /> */}
            {/* <DropdownMenu data={dataDepartment} /> */}
          </div>
          <div className="rightSide">
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
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
      </form>
    </div>
  );
};

export default Home;
