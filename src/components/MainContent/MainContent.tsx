import React from "react";
import Home from "./Home";
import Education from "./Education";

type Props = {};

const MainContent = (props: Props) => {
  return (
    <main className="absolute my-32 w-full">
      <div className="relative mx-8">
        <Home />
        <Education />
      </div>
    </main>
  );
};

export default MainContent;
