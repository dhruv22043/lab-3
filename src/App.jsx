import "./App.css";
import ColorBox from "./components/ColorBox";
import ColorBoxContainer from "./components/ColorBoxContainer";
import colors from "./data/data";
function App() {
  return (
    <>
      <div>
        <ColorBoxContainer colors={colors} />
      </div>
    </>
  );
}

export default App;
