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
        <Route path="button" element={<AllApps />} />
        <Route path="card" element={<AllApps />} />
        <Route path="carousel" element={<AllApps />} />
        <Route path="dateTime-Picker" element={<AllApps />} />
        <Route path="dialog" element={<AllApps />} />
        <Route path="drawer" element={<AllApps />} />
        <Route path="dropdown-menu" element={<AllApps />} />
        <Route path="gradient" element={<AllApps />} />

      </Routes>
    </RootLayout>
  );
};

export default Sidebar;
