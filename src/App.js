import { Routes,Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Deshboard from "./pages/Deshboard";

function App() {

  return (
  <div>
       <Navbar/>

       <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="login" element={<Login/>}/>
             <Route path="signup" element={<Signup/>}/>
             <Route path="deshboard" element={<Deshboard/>}/>

       </Routes>

  </div>
    )
}

export default App;
