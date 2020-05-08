import React from "react";

const date = new Date();
const hour = date.getHours();

const areWeOpen = hour >= 8 && hour < 17 ? "open" : "closed";

export default function OpenClosed() {
  return (
    <div className="card PracticeHours">
      <h3>We are: {areWeOpen}</h3>
      <h3>To make an appointment</h3>
      <h3>call: 020 555 5555</h3>
    </div>
  );
}
// seen in tutorial: https://www.youtube.com/watch?v=7o5FPaVA9m0
