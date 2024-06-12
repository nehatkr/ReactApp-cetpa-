import "./App.css";
import ClassComp from "./Components/classComp";
import FunctionalComp from "./Components/functionalComp";

function App() {
  return (
    <div className="red">
      Hello User
      <div className="container">
        <div className="borderBox">
        <FunctionalComp city="Nagpur" country="India"/>
        </div>
        <div className="borderBox">
          <ClassComp age="100" school="DPS"/>
        </div>
      </div>
    </div>
  );
}

export default App;
