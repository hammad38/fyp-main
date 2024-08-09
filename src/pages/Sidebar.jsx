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

// widgets import
import WidgetCategory from "../widgets/WidgetCategory";

const Sidebar = () => {
  return (
    <RootLayout>
      <Routes>
        <Route
          path="appbar"
          element={<WidgetCategory category="appBar" categoryName="App Bar" />}
        />
        <Route
          path="bottomsheet"
          element={
            <WidgetCategory
              category="bottomSheet"
              categoryName="Bottom Sheet"
            />
          }
        />
        <Route
          path="button"
          element={<WidgetCategory category="button" categoryName="Button" />}
        />
        <Route
          path="card"
          element={<WidgetCategory category="card" categoryName="Card" />}
        />
        <Route
          path="carousel"
          element={
            <WidgetCategory category="carousel" categoryName="Carousel" />
          }
        />
        <Route
          path="dialog"
          element={<WidgetCategory category="dialog" categoryName="Dialog" />}
        />
        <Route
          path="drawer"
          element={<WidgetCategory category="drawer" categoryName="Drawer" />}
        />
        <Route
          path="dropdown"
          element={
            <WidgetCategory category="dropdown" categoryName="Dropdown" />
          }
        />
        <Route
          path="expansiontile"
          element={
            <WidgetCategory
              category="expansiontile"
              categoryName="Expansion Tile"
            />
          }
        />
        <Route
          path="listtile"
          element={
            <WidgetCategory category="listtile" categoryName="List Tile" />
          }
        />
        <Route
          path="listview"
          element={
            <WidgetCategory category="listview" categoryName="List View" />
          }
        />
        <Route
          path="loadingindicator"
          element={
            <WidgetCategory
              category="loadingindicator"
              categoryName="Loading Indicator"
            />
          }
        />
        <Route
          path="mixed"
          element={<WidgetCategory category="mixed" categoryName="Mixed" />}
        />
        <Route
          path="navbar"
          element={
            <WidgetCategory category="navbar" categoryName="Navigation Bar" />
          }
        />
        <Route
          path="neumorphic"
          element={
            <WidgetCategory category="neumorphic" categoryName="Neumorphic" />
          }
        />
        <Route
          path="searchbar"
          element={
            <WidgetCategory category="searchbar" categoryName="Search Bar" />
          }
        />
        <Route
          path="sliders"
          element={<WidgetCategory category="sliders" categoryName="Sliders" />}
        />
        <Route
          path="snackbars"
          element={
            <WidgetCategory category="snackbars" categoryName="Snackbars" />
          }
        />
        <Route
          path="socialbuttons"
          element={
            <WidgetCategory
              category="socialbuttons"
              categoryName="Social Buttons"
            />
          }
        />
        <Route
          path="inputfields"
          element={
            <WidgetCategory
              category="inputfields"
              categoryName="Input Fields"
            />
          }
        />
        <Route
          path="animations"
          element={
            <WidgetCategory category="animations" categoryName="Animations" />
          }
        />

        {/* screens */}
        <Route path="chat-ui" element={<Crypto />} />
        <Route path="e-commerce-ui" element={<AllApps />} />
        <Route path="food-ui" element={<Food />} />
        <Route path="covid-ui" element={<Covid />} />
        <Route path="travel-ui" element={<Travel />} />
        <Route path="quiz" element={<Quiz />} />
      </Routes>
    </RootLayout>
  );
};

export default Sidebar;
