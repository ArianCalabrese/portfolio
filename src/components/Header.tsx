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
  { icon: home, name: "Inicio" },
  { icon: certification, name: "Educación" },
  { icon: portfolio, name: "Experiencia" },
  { icon: portfolio, name: "Portafolio" },
  { icon: social, name: "Contacto" },
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
        <ul className="relative grid grid-cols-6 px-10 rounded-xl mx-32 bg-orange-600">
          {headerData.map((item, index) => (
            <li key={index}>
              <button className="flex justify-evenly items-center hover:bg-orange-400 rounded-md p-4 w-full">
                <Image src={item.icon} alt={item.name} width={32} />
                <p className="text-xl font-semibold text-white">{item.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
