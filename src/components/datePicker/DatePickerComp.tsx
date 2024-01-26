import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComp = ({ labelName, type }) => {
  const [selecteDate, setSelecteDate] = useState(null);
  return (
    <div className="inputCard" style={{ display: "none" /* other styles */ }}>
      <label typeof={type} className="label" htmlFor="">
        {labelName}
      </label>
      <DatePicker
        selected={selecteDate}
        onChange={(date) => setSelecteDate(date)}
        dateFormat="dd/MM/yyyy"
        maxDate={new Date()}
        filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
        isClearable
        showYearDropdown
        scrollableYearDropdown
      />
    </div>
  );
};

export default DatePickerComp;
