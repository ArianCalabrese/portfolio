import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <ul className="absolute grid grid-cols-10 w-full justify-center items-center bg-red-600">
        <li>Home</li>
        <li>About me</li>
        <li>Skills</li>
        <li>Certifications</li>
        <li>Portfolio</li>
        <li>Social</li>
      </ul>
    </header>
  );
};

export default Header;
