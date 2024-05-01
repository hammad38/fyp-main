import { Route, Routes } from "react-router-dom";

import Home from "./pages/Homepage";
import Sidebar from "./pages/Sidebar"
// import Explore from "./pages/Explore";
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">


        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Explore" element={<Sidebar />} />


        </Routes>
      </div>
    </>
  );
};

export default App;