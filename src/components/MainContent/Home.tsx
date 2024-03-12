"use client";
import { useState, useEffect } from "react";
import argentine_flag from "@/icons/argentine_flag.svg";
import github_logo from "@/icons/github_logo.svg";
import linkedin_logo from "@/icons/linkedin_logo.svg";
import mail from "@/icons/mail.svg";

import Image from "next/image";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  const [isWhite, setIsWhite] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsWhite((prevIsWhite) => !prevIsWhite);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleDownloadPDF = () => {
    console.log("Download PDF");
  };

  //Add rounded div on the right bottom corner of the main div as background effect, with color orange-600
  return (
    <div className="flex gap-4 h-full py-16 relative overflow-hidden bottom-0">
      <div className="w-[720px] h-[720px] border-[3px] border-orange-600 rounded-full absolute -z-10 -right-[200px] -bottom-40 -m-40"></div>
      <div className="flex flex-col flex-auto w-[20%] gap-4">
        <div className="rounded-xl w-96 mx-auto">
          <img
            src="https://avatars.githubusercontent.com/u/28679310?s=400&u=9646ccd47a6f7a74993a0ddee275b46ebac8b878&v=4"
            alt="Picture of myself"
            className="object-cover rounded-xl m-auto w-80 h-80"
          />
        </div>
        <div className="grid gap-4">
          <div className="flex w-96 mx-auto items-center gap-2 justify-between">
            <p className="text-xl text-orange-600 font-bold">Edad:</p>
            <p className="text-lg">25 años</p>
          </div>
          <div className="flex w-96 mx-auto items-center gap-2 justify-between">
            <p className="text-xl text-orange-600 font-bold">
              Correo Electronico:
            </p>
            <p className="text-lg">ariancalabrese@gmail.com</p>
            <button
              className="bg-white"
              onClick={(e) => {
                window.location.href = "mailto:ariancalabrese@gmail.com";
                e.preventDefault();
              }}
            >
              <Image
                src={mail}
                alt="Mail icon"
                width={32}
                style={{ color: "white" }}
              />
            </button>
          </div>
          <div className="flex w-96 mx-auto items-center gap-2 justify-between">
            <p className="text-xl text-orange-600 font-bold">Nacionalidad:</p>
            <div className="flex gap-1">
              <p className="text-lg">Argentina</p>
              <Image src={argentine_flag} alt="Argentine flag" width={32} />
            </div>
          </div>
          <div className="flex w-96 mx-auto items-center gap-2 justify-between">
            <p className="text-xl text-orange-600 font-bold">Redes:</p>
            <ul className="grid items-center grid-cols-2 justify-end gap-0">
              <li className="">
                <a href="https://github.com/ArianCalabrese" className="">
                  <Image src={github_logo} alt="" className="" width={32} />
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.linkedin.com/in/ariancalabrese/"
                  className=""
                >
                  <Image src={linkedin_logo} alt="" className="" width={42} />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex w-96 mx-auto items-center gap-2 justify-between">
            <button
              className="mx-auto bg-orange-600 rounded p-4"
              onClick={handleDownloadPDF}
            >
              Descargar CV
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 flex-auto w-[70%] items-center justify-center">
        <div className="flex flex-col gap-8 w-[50%]">
          <p className="text-5xl text-orange-600 font-medium tracking-wide">
            <span className={`text-${isWhite ? "white" : "orange-900"}`}>
              -
            </span>
            Ing. ARIAN CALABRESE.
          </p>
          <p className="text-4xl font-normal tracking-wide">
            DESARROLLADOR DE <span className="text-orange-600">&lt;</span>
            <span className="text-4xl font-normal tracking-wide underline underline-offset-8 decoration-orange-600">
              SOLUCIONES DE SOFTWARE
            </span>
            <span className="text-orange-600">/&gt;</span>
          </p>
          <p className="leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            fugit nostrum dolore esse ipsam officiis deleniti rem quisquam,
            dicta, excepturi exercitationem molestias error distinctio nisi
            beatae possimus temporibus sequi consequuntur!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
