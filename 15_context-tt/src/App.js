import ColorBox from "./components/ColorBox";
import {ColorProvider} from "./contexts/color";
import SelectColors from "./components/SelectColors";

//provider를 사용할때는 꼭 value 값 사용하기
const App = () => {
  return (
    <ColorProvider> 
      <div>
        <SelectColors/>
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;