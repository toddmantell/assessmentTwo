import React from "react";

const GuestDropdown = ({
  dropdownOptions,
  guestValue = 0,
  isActive,
  id,
  labelText,
  handleChange
}) => (
  <div className={isActive ? "dropdown" : "dropdown dropdown--disabled"}>
    <label className="dropdown__label" htmlFor={id}>
      {labelText}
    </label>
    <select id={id} value={guestValue} onChange={handleChange}>
      {dropdownOptions.map((currentOption, index) => (
        <option key={`${index}`} value={currentOption}>
          {currentOption}
        </option>
      ))}
    </select>
  </div>
);

export default GuestDropdown;
