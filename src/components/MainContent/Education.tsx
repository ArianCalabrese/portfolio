import React from "react";
import utnLogo from "@/static/images/utnlogo.svg";
import Image from "next/image";

type Props = {};

const Education = (props: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-5xl">Educación</p>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-gray-400">Universitaria</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div className="flex">
        <div className="p-2">
          <div className="rounded-full bg-white p-2">
            <Image src={utnLogo} alt="utnLogo" width={128} className="p-4" />
          </div>
        </div>
        <div className="p-2">
          <div>
            <p className="font-medium text-3xl">
              Universidad Tecnologica Nacional
            </p>
          </div>
          <div>
            <p className="font-light text-2xl">
              Ingeniero en Sistemas de la Información
            </p>
          </div>
          <div>
            <p className="font-extralight text-xl">2017-2023</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates quibusdam atque consequatur hic nesciunt, neque
              necessitatibus quod tenetur nulla eius quia perspiciatis quasi
              veniam? Perferendis aspernatur iusto veniam labore illum.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-gray-400">Cursos</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div className="flex">
        <div className="p-2">
          <div className="rounded-full bg-white p-2">
            <Image src={utnLogo} alt="utnLogo" width={128} className="p-4" />
          </div>
        </div>
        <div className="p-2">
          <div>
            <p className="font-medium text-3xl">Coursera</p>
          </div>
          <div>
            <p className="font-light text-2xl">Nombre del curso</p>
          </div>
          <div>
            <p className="font-extralight text-xl">2017</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates quibusdam atque consequatur hic nesciunt, neque
              necessitatibus quod tenetur nulla eius quia perspiciatis quasi
              veniam? Perferendis aspernatur iusto veniam labore illum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
