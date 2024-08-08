import { Route, Routes } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import AllApps from "./AllApps";
import Carousel from "./Carousel";
import Card from "./Card";
import Food from "./Food";
import Covid from "./Covid";
import Travel from "./Travel";
import Quiz from "./Quiz";
import Crypto from "./Chat";
import Datetimepicker from './Datetimepicker'


import Build from "./Build";
import Settings from "./Settings";

const Sidebar = () => {
  return (
    
    <RootLayout>
      <Routes>
        <Route path="appbar" element={<AllApps />} />
        <Route path="card" element={<Card />} />
        <Route path="carousel" element={<Carousel />} />
        <Route path="dateTime-Picker" element={<Datetimepicker />} />
        <Route path="dialog" element={<AllApps />} />
        <Route path="drawer" element={<AllApps />} />
        <Route path="dropdown-menu" element={<AllApps />} />
        <Route path="chat-ui" element={<Crypto />} />
        <Route path="e-commerce-ui" element={<AllApps />} />
        <Route path="food-ui" element={<Food />} />
        <Route path="covid-ui" element={<Covid />} />
        <Route path="travel-ui" element={<Travel />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="resolution-app" element={<AllApps />} />
        <Route path="online-course" element={<AllApps />} />
      </Routes>
    </RootLayout>
  );
};

export default Sidebar;
