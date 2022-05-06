import "antd/dist/antd.css";
import { Route, Routes } from "react-router-dom";
import './App.css'
import { Big } from "./Common/Big";
import { ProductC } from "./Common/ProductC";
import { Detail } from "./Components/Detail";
import { Hero } from "./Components/Hero";
import { Navbar } from "./Components/Navbar";
import { Array } from "./Pages/Array";
import { CheckOut } from "./Pages/CheckOut";
import { Home } from "./Pages/Home";
import { Product } from "./Pages/Product";

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<Array/>}/>
        <Route path="/:id/:c" element={<Detail/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
      </Routes>
       

      

     

    </div>
  )
}

export default App
