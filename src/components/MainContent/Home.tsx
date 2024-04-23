"use client";
import React, { useState, useEffect } from "react";
import argentine_flag from "@/icons/argentine_flag.svg";
import github_logo from "@/icons/github_logo.svg";
import linkedin_logo from "@/icons/linkedin_logo.svg";
import mail from "@/icons/mail.svg";

import Image from "next/image";
import bashIcon from "@/icons/programming/bash_icon.svg";
import jsIcon from "@/icons/programming/js_icon.svg";
import tsIcon from "@/icons/programming/ts_icon.svg";
import htmlIcon from "@/icons/programming/html_icon.svg";
import cssIcon from "@/icons/programming/css_icon.svg";
import pythonIcon from "@/icons/programming/python_icon.svg";
import javaIcon from "@/icons/programming/java_icon.svg";

import awsImage from "@/static/images/infra/aws.png";
import azzureImage from "@/static/images/infra/azzure.png";
import gcpImage from "@/static/images/infra/gcp.png";
import terraformImage from "@/static/images/infra/terraform.png";

import djangoImage from "@/static/images/frameworks/django.png";
import nextjsImage from "@/static/images/frameworks/nextjs.svg";
import nodejsImage from "@/static/images/frameworks/nodejs.png";
import reactNative from "@/static/images/frameworks/react.png";

import dockerImage from "@/static/images/other/docker.png";
import teamsImage from "@/static/images/other/teams.png";
import slackImage from "@/static/images/other/slack.png";
import miroImage from "@/static/images/other/miro.png";
import trelloImage from "@/static/images/other/trello.png";
import jiraImage from "@/static/images/other/jira.png";
import bitbucketImage from "@/static/images/other/bitbucket.png";
import githubImage from "@/static/images/other/github.png";

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
          <p>Lenguajes de programación:</p>
          <div
            x-data="{}"
            x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
            className="w-full mx-auto justify-center inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          >
            <ul
              x-ref="logos"
              className="flex items-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll hover:animate-none"
            >
              <li>
                <Image src={htmlIcon} alt="htmlIcon" width={32} />
              </li>
              <li>
                <Image src={cssIcon} alt="cssIcon" width={32} />
              </li>
              <li>
                <Image src={jsIcon} alt="jsIcon" width={32} />
              </li>
              <li>
                <Image src={tsIcon} alt="tsIcon" width={32} />
              </li>
              <li>
                <Image src={bashIcon} alt="bashIcon" width={32} />
              </li>
              <li>
                <Image src={pythonIcon} alt="pythonIcon" width={32} />
              </li>
              <li>
                <Image src={javaIcon} alt="javaIcon" width={32} />
              </li>
            </ul>
          </div>
          <p>Infraestructura:</p>
          <div
            x-data="{}"
            x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
            className="w-full justify-center inline-flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          >
            <ul
              x-ref="logos"
              className="flex justify-center items-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll hover:animate-none"
            >
              <li>
                <Image src={awsImage} alt="awsImage" width={32} />
              </li>
              <li>
                <Image src={azzureImage} alt="azzureImage" width={32} />
              </li>
              <li>
                <Image src={gcpImage} alt="gcpImage" width={32} />
              </li>
              <li>
                <Image src={terraformImage} alt="terraformImage" width={32} />
              </li>
            </ul>
          </div>
          <p>Frameworks:</p>
          <div
            x-data="{}"
            x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
            className="w-full justify-center inline-flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          >
            <ul
              x-ref="logos"
              className="flex justify-center items-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll hover:animate-none"
            >
              <li>
                <Image src={djangoImage} alt="djangoImage" width={32} />
              </li>
              <li>
                <Image src={nextjsImage} alt="nextjsImage" width={32} />
              </li>
              <li>
                <Image src={nodejsImage} alt="nodejsImage" width={32} />
              </li>
              <li>
                <Image src={reactNative} alt="reactNative" width={32} />
              </li>
            </ul>
          </div>
          <p>Otras herramientas:</p>
          <div className="grid grid-flow-col">
            <Image
              src={dockerImage}
              alt="dockerImage"
              className="h-8 object-contain w-auto"
            />
            <Image
              src={teamsImage}
              alt="teamsImage"
              className="h-8 object-contain w-auto"
            />
            <Image
              src={slackImage}
              alt="slackImage"
              className="h-8 object-contain w-auto"
            />
            <Image
              src={miroImage}
              alt="miroImage"
              className="h-8 object-contain w-auto"
            />
            <Image
              src={jiraImage}
              alt="jiraImage"
              className="h-8 object-contain w-auto"
            />
            <Image
              src={trelloImage}
              alt="trelloImage"
              className="h-8 object-contain w-auto"
            />
            <Image
              src={bitbucketImage}
              alt="bitbucketImage"
              className="h-8 object-contain w-auto"
            />
            <Image
              src={githubImage}
              alt="githubImage"
              className="h-8 object-contain w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
