import React, { Component } from "react";
import Room from "./Room";

export default class RoomsContainer extends Component {
  state = {
    rooms: [{enabled: false}, {}, {}, {}]
  };

	//maybe first test is to see if you can locate and update a room using this method???
  updateRoom = roomData => {
		//This is not right, you probably just want the index of the room because you
		//want to update rooms[index] 
		const roomToUpdate = this.state.rooms[roomData.roomNumber - 1];
		this.setState({rooms[roomToUpdate]: roomData});
	}

  render() {
    const { rooms } = this.state;
    return (
      <>
        {rooms.map((room, index) => {
          return <Room roomNumber={index + 1} updateRoom={this.updateRoom} />;
        })}
      </>
    );
  }
}
