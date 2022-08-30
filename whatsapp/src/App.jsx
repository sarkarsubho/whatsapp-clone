
import { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Chat } from "./components/Chat";
import { Sidebar } from "./components/Sidebar";
import { Login } from "./Pages/Login";

function App() {
  // const [user,setUser]=useState(null);
  const {isAuth}=useSelector(state=>state.auth);
  // console.log(user);
  return (
    <div className="App">
      {!isAuth ? <Login></Login>:
      <div className="app_body">
        {/* sidebar */}
        <Sidebar></Sidebar>
        {/* chat */}
      
        
        <Routes>
          <Route path="/rooms/:id" element={<Chat></Chat>}></Route>
          
          <Route path="/" element={<Chat></Chat>}></Route>
        </Routes>
      </div>}
    </div>
  );
}

export default App;
