import { useState } from "react";

const DayNightMood = () => {
  const [night, setNight] = useState(true);
  const changeMood = () => {
    document.querySelector("body").classList.toggle("theme-night");
    setNight(!night);
  };

  return (
    <label className="color_switch" onClick={changeMood}>
      <i className={`fas ${night ? "fa-sun" : "fa-moon"}`} />
    </label>
  );
};

export default DayNightMood;
