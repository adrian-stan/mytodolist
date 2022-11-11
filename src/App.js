import "./style/main.css";
import Baradenav from "./components/Baradenav";
import Land from "./components/Land";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Baradenav />
      <Routes>
        <Route path="/" element={<Land />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
