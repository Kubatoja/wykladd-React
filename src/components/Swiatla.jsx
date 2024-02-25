import React, { useEffect, useState } from "react";

const redDelay = 3000;
const yellowDelay = 2000;
const greenDelay = 5000;

function Swiatla(startColor) {
  const [light, setLight] = useState(startColor?.startColor ?? "red");

  function whatLight(color) {
    return color === light ? color : "";
  }

  useEffect(() => {
    if (light === "red") {
      setTimeout(() => setLight("green"), redDelay);
    } else if (light === "green") {
      setTimeout(() => setLight("yellow"), greenDelay);
    } else if (light === "yellow") {
      //yellow
      setTimeout(() => setLight("red"), yellowDelay);
    }
  }, [light]);

  return (
    <div className="swiatla">
      <div className={"swiatlo " + whatLight("red")}></div>
      <div className={"swiatlo " + whatLight("yellow")}></div>
      <div className={"swiatlo " + whatLight("green")}></div>
    </div>
  );
}

export default Swiatla;
