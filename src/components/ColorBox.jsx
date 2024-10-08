import { useState } from "react";

export default function ColorBox({ colors }) {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const [colorbox, setColor] = useState(randomColor);
  const changecolor = () => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <div
      onClick={() => {
        changecolor();
        console.log(randomColor);
      }}
      style={{
        backgroundColor: colorbox,
        width: "50px",
        height: "50px",
        margin: "5px",
        cursor: "pointer",
      }}
    >
      {console.log(randomColor)}
    </div>
  );
}
