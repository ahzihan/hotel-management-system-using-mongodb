import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Gallery from "./Pages/Gallery/Gallery";
import Register from "./Pages/Register/Register";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import FamilyDetails from "./Pages/Home/Details/FamilyDetails";
import SingleDetails from "./Pages/Home/Details/SingleDetails";
import DoubleDetails from "./Pages/Home/Details/DoubleDetails";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/gallery" element={<Gallery></Gallery>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/singledetails/:singleId" element={
          <RequireAuth>
            <SingleDetails></SingleDetails>
          </RequireAuth>
        }></Route>
        <Route path="/doubledetails/:doubleId" element={
          <RequireAuth>
            <DoubleDetails></DoubleDetails>
          </RequireAuth>
        }></Route>
        <Route path="/familydetails/:familyId" element={
          <RequireAuth>
            <FamilyDetails></FamilyDetails>
          </RequireAuth>
        }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
