import React from "react";
import Home from "./Home";
import AboutMe from "./AboutMe";

type Props = {};

const MainContent = (props: Props) => {
  return (
    <main className="absolute my-32 w-full">
      <div className="relative mx-8">
        <Home />
        <AboutMe />
      </div>
    </main>
  );
};

export default MainContent;
