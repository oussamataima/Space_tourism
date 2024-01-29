import { useState } from "react";
import Circle from "../Circle";
import { crew } from "./data";

const findMemberByName = (name) => {
  // Convert the provided name to lowercase
  const lowercaseName = name.toLowerCase();

  // Use Array.find to find the destination with the specified name (case-insensitive)
  const foundMember = crew.find(
    (member) => member.name.toLowerCase() === lowercaseName
  );

  // Return the found destination, or null if not found
  return foundMember || null;
};

const Crew = () => {
  const [currentMember, setCurrentMember] = useState({
    name: "Douglas Hurley",
    images: {
      png: "/crew/image-douglas-hurley.png",
      webp: "/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  });

  return (
    <main>
      <div className="fixed z--10  inset-0">
        <picture>
          <source
            media="(min-width:1024px)"
            srcSet="/crew/background-crew-desktop.jpg"
          />
          <source
            media="(min-width:768px)"
            srcSet="/crew/background-crew-tablet.jpg"
          />
          <img
            className="w-full h-full"
            src="/crew/background-crew-mobile.jpg"
          />
        </picture>
      </div>
      <section className="z-50 relative mt-5 sm:mt-10 xl:mt-16">
        <div className="flex gap-[18px] justify-center mt-6 sm:hidden  font-barlowCon uppercase  tracking-[2.7px] ">
          <span className="opacity-[0.25] font-bold ">02</span>
          <h1>Meet your crew</h1>
        </div>
        <div className="flex flex-col sm:flex-col-reverse xl:flex-row-reverse xl:gap-[82px] xl:justify-center">
          <div className="flex justify-center mt-8 sm:mt-10 xl:m-0">
            <img
              className="w-[177px] h-[222px] sm:w-[456px] sm:h-[572px] xl:w-[568px] xl:h-[712px]"
              src={currentMember.images.png}
            />
          </div>
          <div className="bg-[#383B4B] w-[327px] h-[1px] sm:w-[573px] flex justify-center mx-auto  sm:hidden "></div>

          <div className="flex flex-col ">
            <div className="flex gap-4 justify-center my-8 sm:my-10 xl:justify-start xl:mt-[120px] xl:mb-0 sm:order-5">
              {crew.map((member) => {
                return (
                  <Circle
                    key={member.name}
                    name={member.name}
                    active={currentMember.name === member.name}
                    eventHandler={() =>
                      setCurrentMember(findMemberByName(member.name))
                    }
                  />
                );
              })}
            </div>
            <div className="sm:flex gap-[18px] justify-center hidden sm:justify-start sm:ml-[38px]  xl:mx-0 xl:mt-[14px] xl:mb-[154px] sm:mb-[60px] sm:text-[20px] xl:m-0 xl:text-[28px] font-barlowCon uppercase  tracking-[2.7px] sm:tracking-[3.37px] text-center">
              <span className="opacity-[0.25] font-bold ">01</span>
              <h1>Meet your crew</h1>
            </div>
            <div className="flex flex-col items-center xl:items-start">
              <h2 className="text-white/50 font-serif uppercase sm:text-[24px] xl:text-[32px] ">
                {currentMember.role}
              </h2>
              <h3 className="text-white text-[24px] font-serif uppercase sm:text-[40px] xl:text-[56px] mt-2 xl:mt-4 line-clamp-1 ">
                {currentMember.name}
              </h3>
              <p className="text-[15px] font-sans text-softBlue leading-[25px] max-w-[327px] sm:max-w-[458px] xl:text-lg xl:w-[444px] xl:leading-8 xl:text-start sm:text-base text-center mt-4 xl:mt-7">
                {currentMember.bio}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Crew;
