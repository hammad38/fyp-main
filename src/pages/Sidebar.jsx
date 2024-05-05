import { Route, Routes } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import AllApps from "./AllApps";
import Carousel from "./Carousel";
import Card from "./Card";
import Build from "./Build";
import Settings from "./Settings";

const Sidebar = () => {
  return (
    
    <RootLayout>
      <Routes>
        <Route path="/" element={<AllApps />} />
        <Route path="card" element={<AllApps />} />
        <Route path="carousel" element={<AllApps />} />
        <Route path="dateTime-Picker" element={<AllApps />} />
        <Route path="dialog" element={<AllApps />} />
        <Route path="drawer" element={<AllApps />} />
        <Route path="dropdown-menu" element={<AllApps />} />
        <Route path="crypto-ui" element={<AllApps />} />
        <Route path="e-commerce-ui" element={<AllApps />} />
        <Route path="food-ui" element={<AllApps />} />
        <Route path="gamefied-ui" element={<AllApps />} />
        <Route path="mics" element={<AllApps />} />
        <Route path="nft-1" element={<AllApps />} />
        <Route path="resolution-app" element={<AllApps />} />
        <Route path="online-course" element={<AllApps />} />
      </Routes>
    </RootLayout>
  );
};

export default Sidebar;
