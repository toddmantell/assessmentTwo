import React from "react";

const GuestDropdown = ({
  labelText,
  isActive,
  handleChange,
  dropdownOptions
}) => (
  <div className={isActive ? "dropdown" : "dropdown disabled"}>
    <label htmlFor="">{labelText}</label>
    <select id="" onChange={handleChange}>
      {dropdownOptions.map((currentOption, index) => (
        <option key={`${index}`} value={currentOption.value}>
          {currentOption.text}
        </option>
      ))}
    </select>
  </div>
);

export default GuestDropdown;
