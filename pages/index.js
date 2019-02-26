import React, { Component } from "react";
import Room from "../components/Room";
import Saving from "../components/Saving";
import "../styles.css";

export default class IndexPage extends Component {
  BASEROOMOBJECT = { isActive: false, adults: 1, children: 0 };

  state = {
    rooms: [
      { ...this.BASEROOMOBJECT, isActive: true },
      this.BASEROOMOBJECT,
      this.BASEROOMOBJECT,
      this.BASEROOMOBJECT
    ],
    saving: false
  };

  componentDidMount() {
    if (window.localStorage.rooms) {
      const existingRooms = JSON.parse(window.localStorage.rooms);
      this.setState({ rooms: existingRooms });
    }
  }

  handleSubmit = () => {
    this.setState({ saving: true });
    setTimeout(() => this.setState({ saving: false }), 2000);
    window.localStorage.rooms = JSON.stringify(this.state.rooms);
  };

  updateRoom = (roomNumber, eventTarget) => {
    if (eventTarget.type === "checkbox") {
      this.enableOrDisable(roomNumber, eventTarget);
    } else {
      this.handleGuestAmounts(roomNumber, eventTarget);
    }
  };

  enableOrDisable(roomNumber, eventTarget) {
    const { rooms } = this.state;

    const isActive = eventTarget.checked;

    const newRoomsArray = isActive
      ? this.enablePreviousRooms(roomNumber, rooms)
      : this.disableThisAndLaterRooms(roomNumber, rooms);

    this.setState({ rooms: newRoomsArray });
  }

  enablePreviousRooms(roomNumber, roomsArray) {
    const roomIndex = roomNumber - 1;
    const result = [...roomsArray];
    for (let i = roomIndex; i > 0; i--) {
      if (result[i].isActive === false) result[i].isActive = true;
    }

    return result;
  }

  disableThisAndLaterRooms(roomNumber, roomsArray) {
    const roomIndex = roomNumber - 1;
    const result = [...roomsArray];

    for (let i = roomIndex; i < roomsArray.length; i++) {
      result[i].isActive = false;
      result[i].adults = 1;
      result[i].children = 0;
    }

    return result;
  }

  handleGuestAmounts(roomNumber, eventTarget) {
    const { rooms } = this.state;
    const roomIndex = roomNumber - 1;
    const roomToUpdate = rooms[roomIndex];
    const numberOfGuests = +eventTarget.value;
    const updatedRoom = {
      ...roomToUpdate,
      [eventTarget.id]: numberOfGuests
    };
    rooms[roomIndex] = updatedRoom;
    this.setState({ rooms });
  }

  render() {
    const { rooms, saving } = this.state;
    return !saving ? (
      <main className="container">
        <div className="rooms-container">
          {rooms.map((room, index) => {
            if (index === 0) {
              return (
                <Room
                  key={`room-${index}`}
                  adults={room.adults}
                  children={room.children}
                  showCheckbox={false}
                  roomNumber={index + 1}
                  isActive={true}
                  updateRoom={this.updateRoom}
                />
              );
            }
            return (
              <Room
                key={`room-${index}`}
                adults={room.adults}
                children={room.children}
                roomNumber={index + 1}
                isActive={room.isActive}
                updateRoom={this.updateRoom}
              />
            );
          })}
        </div>
        <div className="button-row">
          <button
            type="submit"
            className="submit-button"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </div>
      </main>
    ) : (
      <Saving />
    );
  }
}
