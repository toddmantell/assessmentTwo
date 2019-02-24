import React from "react";

export default ({ roomNumber = 0 }) => (
  <section>
    <div className="room">
      <h2>Room {roomNumber}</h2>
    </div>
  </section>
);
