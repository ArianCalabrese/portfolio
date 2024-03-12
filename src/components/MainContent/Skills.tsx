"use client";
import React from "react";
import { useState, useEffect } from "react";
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
import nextjsImage from "@/static/images/frameworks/nextjs.png";
import nodejsImage from "@/static/images/frameworks/nodejs.png";
import reactNative from "@/static/images/frameworks/react-native.png";

import dockerImage from "@/static/images/other/docker.png";
import teamsImage from "@/static/images/other/teams.png";
import slackImage from "@/static/images/other/slack.png";
import miroImage from "@/static/images/other/miro.png";
import notionImage from "@/static/images/other/notion.png";
import trelloImage from "@/static/images/other/trello.png";
import jiraImage from "@/static/images/other/jira.png";
import bitbucketImage from "@/static/images/other/bitbucket.png";
import githubImage from "@/static/images/other/github.png";

type Props = {};

const Skills = (props: Props) => {
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

  return (
    <div className="gap-4 w-full h-full py-36">
      <p className="text-orange-600 text-6xl font-bold text-center">
        Habilidades
      </p>
      <div className="grid w-[80%]">
        <div>Lenguajes</div>
        <div className="grid grid-cols-10">
          <Image src={htmlIcon} alt="htmlIcon" />
          <Image src={cssIcon} alt="cssIcon" />
          <Image src={jsIcon} alt="jsIcon" />
          <Image src={tsIcon} alt="tsIcon" />
          <Image src={bashIcon} alt="bashIcon" />
          <Image src={pythonIcon} alt="pythonIcon" />
          <Image src={javaIcon} alt="javaIcon" />
        </div>
        <div>Librerias y Frameworks</div>
        <div className="grid grid-cols-10">
          <Image src={htmlIcon} alt="htmlIcon" />
          <Image src={cssIcon} alt="cssIcon" />
          <Image src={jsIcon} alt="jsIcon" />
          <Image src={tsIcon} alt="tsIcon" />
          <Image src={bashIcon} alt="bashIcon" />
          <Image src={pythonIcon} alt="pythonIcon" />
          <Image src={javaIcon} alt="javaIcon" />
        </div>
        <div>Bases de Datos</div>
        <div className="grid grid-cols-10">
          <Image src={htmlIcon} alt="htmlIcon" />
          <Image src={cssIcon} alt="cssIcon" />
          <Image src={jsIcon} alt="jsIcon" />
          <Image src={tsIcon} alt="tsIcon" />
          <Image src={bashIcon} alt="bashIcon" />
          <Image src={pythonIcon} alt="pythonIcon" />
          <Image src={javaIcon} alt="javaIcon" />
        </div>
        <div>Extras</div>
        <div className="grid grid-cols-10">
          <Image src={htmlIcon} alt="htmlIcon" />
          <Image src={cssIcon} alt="cssIcon" />
          <Image src={jsIcon} alt="jsIcon" />
          <Image src={tsIcon} alt="tsIcon" />
          <Image src={bashIcon} alt="bashIcon" />
          <Image src={pythonIcon} alt="pythonIcon" />
          <Image src={javaIcon} alt="javaIcon" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
