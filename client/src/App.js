import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Accueil from "./Components/Accueil";
import Contact from "./Components/Contact";
import Maison from "./Components/Maison";
import Navbar from "./Components/Navbar";
import Propos from "./Components/Propos";
import Soins from "./Components/Soins";
import { useDispatch } from "react-redux";
import { getproducts } from "./redux/productSlice";
import Detailsproduct from "./Components/Detailsproduct";
import Addproduct from "./Components/Addproduct";
import Dashboard from "./Components/Dashboard";

function App() {
  const dispatch = useDispatch();
  const [ping, setping] = useState(false);
  useEffect(() => {
    dispatch(getproducts());
  }, [ping]);
  return (
    <div className="Container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/soins" element={<Soins />} />
        <Route path="/maison" element={<Maison />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Detailsproduct />} />
        <Route
          path="/admin-dashboread/"
          element={<Dashboard ping={ping} setping={setping} />}
        />
      </Routes>
    </div>
  );
}

export default App;
