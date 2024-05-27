import { useState, useEffect } from "react";
import Logo from "../assets/letter-q.png";
import {
  ArrowLeftRightIcon,
  BarChart3Icon,
  Clock4Icon,
  LayoutDashboard,
  HelpCircleIcon,
} from "lucide-react";
import { motion } from "framer-motion";

import RightArrowIcon from "./../assets/icons/rightArrow.svg";

const variants = {
  // todo: change expanded to 30% and nonexpanded to %6
  expanded: { width: "220px" },
  nonexpanded: { width: "60px" },
};

const navLinks = [
  {
    link: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    link: "Activity",
    icon: Clock4Icon,
  },
  {
    link: "Analytics",
    icon: BarChart3Icon,
  },
  {
    link: "Transactions",
    icon: ArrowLeftRightIcon,
  },
  {
    link: "Support",
    icon: HelpCircleIcon,
  },
];

function Navbar() {
  // todo: change to true
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // screen resize
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth < 768) {
        setIsExpanded(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonexpanded"}
      variants={variants}
      className={
        "py-10 h-screen flex flex-col border border-r-1 bg-[#FDFDFD] relative" +
        (isExpanded ? " px-10" : " px-2 duration-500")
      }
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[#8cc0ff] md:flex hidden justify-center items-center"
      >
        <img alt="img" src={RightArrowIcon} className="w-2" />
      </div>

      <div className="logo-div flex space-x-4 items-center">
        <img alt="img" src={Logo} className="md:w-10 w-10 ml-2" />
        <span className={!isExpanded ? "hidden" : "block"}>Quabe Dashboard</span>
      </div>

      <div className="flex flex-col space-y-8 mt-12">
        {navLinks.map((item, index) => (
          <div className="nav-links w-full" key={index}>
            <div
              onClick={() => setActiveIndex(index)}
              className={
                "flex space-x-3 w-full p-2 rounded " +
                (activeIndex === index
                  ? "bg-[#8cc9ff] text-white cursor-pointer"
                  : " text-black cursor-pointer") +
                (!isExpanded ? " pl-3" : "")
              }
            >
              <item.icon className="md:w-6 w-4" />
              <span className={!isExpanded ? "hidden" : "block"}>
                {item.link}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Navbar;
