import { Divider } from "@chakra-ui/react";
import "./App.css";
import { Chart } from "./components/Chart";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="app_body">
        {/* sidebar */}
        <Sidebar></Sidebar>
        {/* chat */}
        {/* <Divider></Divider> */}
        <Chart></Chart>
      </div>
    </div>
  );
}

export default App;
