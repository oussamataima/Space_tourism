import { useState } from "react";
import NumberedCircle from "../NumberedCircle";
import { technology } from "./data";
const TechById = (id) => {
  const foundTech = technology.find((tech) => tech.id == id);

  // Return the found destination, or null if not found
  return foundTech || null;
};

const Technology = () => {
  const [currentTech, setCurrentTech] = useState({
    id: 1,
    name: "Launch vehicle",
    images: {
      portrait: "/technology/image-launch-vehicle-portrait.jpg",
      landscape: "/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  });
  return (
    <main>
      <div className="fixed z--10  inset-0">
        <picture>
          <source
            media="(min-width:1024px)"
            srcSet="/technology/background-technology-desktop.jpg"
          />
          <source
            media="(min-width:768px)"
            srcSet="/technology/background-technology-tablet.jpg"
          />
          <img
            className="w-full h-full"
            src="/technology/background-technology-mobile.jpg"
          />
        </picture>
      </div>
      <section className="relative z-50 mt-6 mb-[100px]">
        <div className="flex gap-[18px] justify-center sm:justify-start sm:ml-[38px]  xl:ml-[166px] sm:text-[20px] xl:text-[28px] font-barlowCon uppercase  tracking-[2.7px] sm:tracking-[3.37px] text-center">
          <span className="opacity-[0.25] font-bold ">03</span>
          <h1>SPACE LAUNCH 101</h1>
        </div>
        <div className="mt-8 xl:hidden">
          <img className="mx-auto" src={currentTech.images.landscape} />
        </div>
        <div className="xl:flex xl:items-center  xl:justify-end xl:mt-7">
          <div className="order-5 hidden xl:block">
            <img src={currentTech.images.portrait} />
          </div>
          <div>
            <div className="flex xl:flex-col xl:gap-8 justify-center gap-4 mt-[34px] mb-[26px]">
              {technology.map((tech) => {
                return (
                  <NumberedCircle
                    key={tech.id}
                    text={tech.id}
                    active={currentTech.id === tech.id}
                    eventHandler={() => setCurrentTech(TechById(tech.id))}
                  />
                );
              })}
            </div>
          </div>
          <div className="xl:mr-[130px] xl:ml-20">
            <h2 className="text-[14px] sm:text-[16px] text-softBlue text-center xl:text-start tracking-[2.36px] font-barlowCon uppercase">
              THE TERMINOLOGY…
            </h2>
            <h3 className="text-[24px] sm:text-[40px] xl:-text-[56px] text-center xl:text-start uppercase mt-[10px] mb-4">
              {currentTech.name}
            </h3>
            <p className="font-sans text-[15px] leading-[25px] max-w-[327px] text-center sm:text-base sm:leading-8 sm:max-w-[458px] xl:text-start xl:max-w-[444px] mx-auto ">
              {currentTech.description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Technology;
