//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const currentHour = new Date();
const hour = currentHour.getHours();
const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

let greeting;
let greeting2;

if (hour < 12) {
  greeting = "Good Morning";
  greeting2 = "Morning";
} else if (hour < 18) {
  greeting = "Good Afternoon";
  greeting2 = "Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  greeting2 = "Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 style={customStyle}>
    {greeting}! Now is {hour} in the {greeting2}!
  </h1>,
  document.getElementById("root")
);
