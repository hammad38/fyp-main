import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { logo1 } from "../../assets/";
import "./Sidebar.css"; // Assuming you have this CSS file
import WidgetCategory from "../../widgets/WidgetCategory";

const Sidebar = () => {
  const isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusList = [
    {
      name: "build",
      icon: RiBuilding3Line,
      menus: ["auth", "app settings", "storage", "hosting"],
    },
    {
      name: "analytics",
      icon: TbReportAnalytics,
      menus: ["dashboard", "realtime", "events"],
    },
  ];

  return (
    <div className="fixed-sidebar">
      <div
        onClick={() => setOpen(false)}
        className={`overlay ${open ? "show" : ""}`}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className={`sidebar ${isTabletMid ? "md-relative" : ""}`}
      >
        <div className="sidebar-content">
          <NavLink to={"/"} className="sidebar-logo">
            <img src={logo1} alt="Widget World" />
            <span>Widget World</span>
          </NavLink>
        </div>

        <div className="sidebar-menu">
          <ul className="menu-list">
            <small className="menu-title">Widgets</small>
            <li>
              <NavLink to="appbar" className="menu-item">
                <span>Appbar</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="bottomsheet" className="menu-item">
                <span>Bottom Sheet</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="button" className="menu-item">
                <span>Button</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="card" className="menu-item">
                <span>Card</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="carousel" className="menu-item">
                <span>Carousel</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="dialog" className="menu-item">
                <span>Dialog</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="drawer" className="menu-item">
                <span>Drawer</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="dropdown" className="menu-item">
                <span>Dropdown</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="expansiontile" className="menu-item">
                <span>Expansion Tile</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="listtile" className="menu-item">
                <span>List Tile</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="listview" className="menu-item">
                <span>List View</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="loadingindicator" className="menu-item">
                <span>Loading Indicator</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="mixed" className="menu-item">
                <span>Mixed</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="navbar" className="menu-item">
                <span>Navigation Bar</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="neumorphic" className="menu-item">
                <span>Neumorphic</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="searchbar" className="menu-item">
                <span>Search Bar</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="sliders" className="menu-item">
                <span>Sliders</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="snackbars" className="menu-item">
                <span>Snackbars</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="socialbuttons" className="menu-item">
                <span>Social Buttons</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="inputfields" className="menu-item">
                <span>Input Fields</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="animations" className="menu-item">
                <span>Animations</span>
              </NavLink>
            </li>
          </ul>
          <ul className="menu-list">
            <li>
              <small className="menu-title">Screens</small>
              <NavLink to={"chat-ui"} className="menu-item">
                <span>Chat App UI</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"food-ui"} className="menu-item">
                <span>Food UI</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"covid-ui"} className="menu-item">
                <span>Covid UI</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"travel-ui"} className="menu-item">
                <span>Travel UI</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"quiz"} className="menu-item">
                <span>Quiz UI</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"e-commerce-ui"} className="menu-item">
                <span>E-commerce UI</span>
              </NavLink>
            </li>

            <li>
              <NavLink to={"online-course"} className="menu-item">
                <span>Online Course UI</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"online-course"} className="menu-item">
                <span>Online Course UI</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"online-course"} className="menu-item">
                <span>Online Course UI</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </motion.div>
      <div
        className={`menu-button ${isTabletMid ? "show" : ""}`}
        onClick={() => setOpen(true)}
      >
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
