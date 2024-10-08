import { colors } from "../data/data";
import ColorBox from "./ColorBox";

export default function colorBoxContainer({ colors }) {
  return (
    <div>
      {colors.map((ColorBox) => (
        <ColorBox />
      ))}
    </div>
  );
}
