import React, { useLayoutEffect, useState } from "react";
import home from "@/icons/home.svg";
import user from "@/icons/user.svg";
import skill from "@/icons/skill.svg";
import certification from "@/icons/certification.svg";
import portfolio from "@/icons/portfolio.svg";
import social from "@/icons/social.svg";
import Image from "next/image";

type Props = {};

const headerData = [
  { icon: home, name: "Home" },
  { icon: user, name: "About me" },
  { icon: skill, name: "Skills" },
  { icon: certification, name: "Certifications" },
  { icon: portfolio, name: "Portfolio" },
  { icon: social, name: "Social" },
];

const Header = (props: Props) => {
  const [color, setColor] = useState(false);

  const COLOR_CHANGE_THRESHOLD = 10;

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= COLOR_CHANGE_THRESHOLD && !color) {
        setColor(true);
      } else if (window.scrollY < COLOR_CHANGE_THRESHOLD && color) {
        setColor(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [color]);

  return (
    <header>
      <nav
        className={
          color
            ? "fixed w-full top-0 left-0 z-10 transition-all duration-300 ease-linear overflow-hidden py-5"
            : "fixed w-full top-0 left-0 z-10 transition-all duration-300 ease-linear overflow-hidden bg-orange-600"
        }
      >
        <ul className="relative grid grid-cols-6 gap-4 px-10 rounded-xl mx-32 bg-orange-600">
          {headerData.map((item, index) => (
            <li key={index}>
              <button className="flex items-center hover:bg-orange-300 hover:shadow-inner hover:shadow-neutral-500 rounded-md p-4">
                <Image src={item.icon} alt={item.name} width={32} />
                <p className="text-xl">{item.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
