import React from "react";
import GuestDropdown from "./GuestDropdown";

export default class Room extends React.Component {
  handleChange = event => {
    const { roomNumber } = this.props;
    this.props.updateRoom(roomNumber, event.target);
  };

  render() {
    const {
      adults,
      children,
      roomNumber,
      showCheckbox = true,
      isActive = false
    } = this.props;
    return (
      <section className={isActive ? "room" : "room room--disabled"}>
        <h4
          className={
            isActive ? "room__header" : "room__header room__header--disabled"
          }
        >
          {showCheckbox && (
            <input
              id="active-checkbox"
              type="checkbox"
              checked={isActive}
              onChange={this.handleChange}
            />
          )}
          Room {roomNumber}
        </h4>
        <div className="dropdowns">
          <GuestDropdown
            dropdownOptions={[1, 2]}
            guestValue={adults}
            isActive={isActive}
            id="adults"
            labelText="Adults (18+)"
            handleChange={this.handleChange}
          />
          <GuestDropdown
            dropdownOptions={[0, 1, 2]}
            guestValue={children}
            isActive={isActive}
            id="children"
            labelText="Children (0 - 17)"
            handleChange={this.handleChange}
          />
        </div>
      </section>
    );
  }
}
