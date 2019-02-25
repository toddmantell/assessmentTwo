import React from "react";
import GuestDropdown from "./GuestDropdown";

export default class Room extends React.Component {
  handleChange = event => {
    const { roomNumber } = this.props;
    this.props.updateRoom(roomNumber, event.target);
  };

  render() {
    const {
      roomNumber = 0,
      updateRoom,
      showCheckbox = true,
      isActive = false
    } = this.props;
    return (
      <section className="room">
        <h2>Room {roomNumber}</h2>
        <div>
          {showCheckbox && (
            <>
              <label htmlFor="">Choose</label>
              <input
                id="active-checkbox"
                type="checkbox"
                checked={isActive}
                onChange={this.handleChange}
              />
            </>
          )}
          <GuestDropdown
            isActive={isActive}
            labelText="Adults"
            handleChange={this.handleChange}
            dropdownOptions={[{ text: "1", value: 1 }, { text: "2", value: 2 }]}
          />
          <GuestDropdown
            isActive={isActive}
            labelText="Children"
            handleChange={this.handleChange}
            dropdownOptions={[{ text: "1", value: 1 }, { text: "2", value: 2 }]}
          />
        </div>
      </section>
    );
  }
}
