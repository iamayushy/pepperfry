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
import dam from './assets/footer.png'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCurrent, signMeOut } from "./Redux/Rauth/action";
function App() {

  const userFeed = useSelector(store => store.gauth.userid)
  const dispatch = useDispatch()

  useEffect(() => {
  dispatch(getCurrent())}, [])

  console.log(userFeed);
  const handleLog = () => {
    dispatch(signMeOut())
    console.log(userFeed)
  }
  
  return (
    <div className="App">
      <button onClick={handleLog} >Logout</button>
      <Navbar/>
      <Routes>
        <Route path="*" element={<Home/>}/>
        <Route path="/:id" element={<Array/>}/>
        <Route path="/:id/:c" element={<Product/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
      </Routes>
       

      <div id="foor">
      <img src={dam} alt="" />
      </div>

     

    </div>
  )
}

export default App
