import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  labelName: string;
}

const DatePickerComp: React.FC<DatePickerProps> = ({ labelName }) => {
  const [selecteDate, setSelecteDate] = useState(new Date());

  return (
    <div className="inputCard" style={{ display: "none" /* other styles */ }}>
      <label className="label" htmlFor="">
        {labelName}
      </label>
      <DatePicker
        selected={selecteDate}
        onChange={(date) => setSelecteDate(date as Date)}
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
