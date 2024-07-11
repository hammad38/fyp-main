import { useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
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
import { logo1 } from "../../assets/"


const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
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
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${open ? "block" : "hidden"
          } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className="bg-white text-black shadow-xl z-[999] max-w-[16rem] w-[16rem] overflow-hidden md:relative fixed h-screen"
      >
        <div className="flex items-center gap-0.1 font-medium border-b py-3 border-slate-300 mx-3">
          <NavLink to={"/"} className="link flex items-center pl-3">
            <img
              src={logo1}
              width={50}
              alt=""
            />
            <span className="text-xl whitespace-pre pl-3">Widget World</span>
          </NavLink>
        </div>

        <div className="flex flex-col h-full ">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-4 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 md:h-[90%] h-[70%] overflow-y-auto">
            <li>
              <small className="pl-3 text-black	inline-block mb-2 font-bold text-lg">
                Widgets
              </small>
              <NavLink to={"appbar"} className="link flex items-center pl-5">
                <span>Appbar</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"card"}
                className="link flex items-center pl-5"
              >
                {/* <BsPerson size={23} className="min-w-max mr-2" /> */}
                <span>Card</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"carousel"}
                className="link flex items-center pl-5"
              >
                {/* <HiOutlineDatabase size={23} className="min-w-max mr-2" /> */}
                <span>Carousel</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"dateTime-Picker"} className="link flex items-center pl-5">
                {/* <HiOutlineDatabase size={23} className="min-w-max mr-2" /> */}
                <span>DateTime Picker</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"dialog"} className="link flex items-center pl-5">
                {/* <HiOutlineDatabase size={23} className="min-w-max mr-2" /> */}
                <span>Dialog</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"drawer"} className="link flex items-center pl-5">
                {/* <HiOutlineDatabase size={23} className="min-w-max mr-2" /> */}
                <span>Drawer</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"dropdown-menu"} className="link flex items-center pl-5">
                {/* <HiOutlineDatabase size={23} className="min-w-max mr-2" /> */}
                <span>Dropdown Menu</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"gradient"} className="link flex items-center pl-5">
                {/* <HiOutlineDatabase size={23} className="min-w-max mr-2" /> */}
                <span>Gradient</span>
              </NavLink>
            </li>
            <li>
              <small className="pl-3 text-black	inline-block mb-2 font-bold text-lg">
                Screens
              </small>
              
              <NavLink to={"crypto-ui"} className="link flex items-center pl-5">
                <span>Crypto UI</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"food-ui"}
                className="link flex items-center pl-5"
              >
                {/* <HiOutlineDatabase size={23} className="min-w-max mr-2" /> */}
                <span>Food UI</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"covid-ui"} className="link flex items-center pl-5">
                {/* <HiOutlineDatabase size={23} className="min-w-max mr-2" /> */}
                <span>Covid UI</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"calculator"} className="link flex items-center pl-5">
                {/* <HiOutlineDatabase size={23} className="min-w-max mr-2" /> */}
                <span>Calculator UI</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"quiz"} className="link flex items-center pl-5">
                {/* <HiOutlineDatabase size={23} className="min-w-max mr-2" /> */}
                <span>Quiz</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"e-commerce-ui"}
                className="link flex items-center pl-5"
              >
                {/* <BsPerson size={23} className="min-w-max mr-2" /> */}
                <span>E-commerce UI</span>
              </NavLink>
            </li>
            
            <li>
              <NavLink to={"resolution-app"} className="link flex items-center pl-5">
                {/* <HiOutlineDatabase size={23} className="min-w-max mr-2" /> */}
                <span>Resolution App</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"online-course"} className="link flex items-center pl-5">
                {/* <HiOutlineDatabase size={23} className="min-w-max mr-2" /> */}
                <span>Online Course UI</span>
              </NavLink>
            </li>
          </ul>
        </div>

      </motion.div>
      <div className="m-3 md:hidden" onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
