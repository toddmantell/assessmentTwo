import React, { Component } from "react";
import Room from "../components/Room";

export default class IndexPage extends Component {
  state = {
    rooms: [
      { isActive: true, numberOfGuests: 0 },
      { isActive: false, numberOfGuests: 0 },
      { isActive: false, numberOfGuests: 0 },
      { isActive: false, numberOfGuests: 0 }
    ]
  };

  //maybe first test is to see if you can locate and update a room using this method???
  updateRoom = (roomNumber, eventTarget) => {
    const { rooms } = this.state;
    const { value } = eventTarget;
    const roomIndex = roomNumber - 1;
    const roomToUpdate = rooms[roomIndex];
    console.log(roomToUpdate);
    if (eventTarget.type === "checkbox") {
      const isActive = eventTarget.checked;
      if (roomNumber >= 1 && isActive) {
        for (let i = 1; i < roomNumber; i++) {
          rooms[i].isActive = true;
        }
      }
      const updatedRoom = { ...roomToUpdate, isActive };
      rooms[roomIndex] = updatedRoom;
      this.setState({ rooms });
    } else {
      const numberOfGuests = +eventTarget.value;
      const updatedRoom = { ...roomToUpdate, numberOfGuests };
      rooms[roomIndex] = updatedRoom;
      this.setState({ rooms });
    }
  };

  render() {
    const { rooms } = this.state;
    return (
      <div className="rooms-container">
        {rooms.map((room, index) => {
          if (index === 0) {
            return (
              <Room
                key={`room-${index}`}
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
              roomNumber={index + 1}
              isActive={room.isActive}
              updateRoom={this.updateRoom}
            />
          );
        })}
      </div>
    );
  }
}
