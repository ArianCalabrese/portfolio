import React from "react";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Skills from "./Skills";

type Props = {};

const MainContent = (props: Props) => {
  return (
    <main className="absolute my-32 w-full">
      <div className="relative mx-8">
        <Home />
        <AboutMe />
        <Skills />
      </div>
    </main>
  );
};

export default MainContent;
