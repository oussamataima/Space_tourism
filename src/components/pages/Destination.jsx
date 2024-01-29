import { useState } from "react";
import { destinations } from "./data";

const findDestinationByName = (name) => {
  // Convert the provided name to lowercase
  const lowercaseName = name.toLowerCase();

  // Use Array.find to find the destination with the specified name (case-insensitive)
  const foundDestination = destinations.find(
    (destination) => destination.name.toLowerCase() === lowercaseName
  );

  // Return the found destination, or null if not found
  return foundDestination || null;
};

const Destination = () => {
  const [currentDestination, setCurrentDestination] = useState(
    findDestinationByName("moon")
  );
  return (
    <main>
      <div className="fixed z--10  inset-0">
        <picture>
          <source
            media="(min-width:1024px)"
            srcSet="../../../public/destination/background-destination-desktop.jpg"
          />
          <source
            media="(min-width:768px)"
            srcSet="../../../public/destination/background-destination-tablet.jpg"
          />
          <img
            className="w-full h-full"
            src="../../../public/destination/background-destination-mobile.jpg"
          />
        </picture>
      </div>
      <section className="relative z-50 mt-6 lg:mt-[76px]">
        <div className="flex gap-[18px] justify-center sm:justify-start sm:ml-[38px]  xl:ml-[166px] sm:text-[20px] xl:text-[28px] font-barlowCon uppercase  tracking-[2.7px] sm:tracking-[3.37px] text-center">
          <span className="opacity-[0.25] font-bold ">01</span>
          <h1>Pick your destination</h1>
        </div>
        <div className="flex flex-col xl:justify-center xl:gap-[157px] xl:flex-row xl:mt-16">
          <div className="flex justify-center mt-8 mb-[26px] sm:mt-[60px] sm:mb-[54px] ">
            <img
              className="w-[170px] aspect-square sm:w-[300px] lg:w-[445px]"
              src={currentDestination.images.png}
            />
          </div>
          <div className="">
            <div className="flex gap-[26px] xl:gap-9 justify-center xl:justify-start uppercase font-barlowCon tracking-[2.36px] ">
              {destinations.map((destination) => {
                return (
                  <p
                    key={destination.name}
                    onClick={() =>
                      setCurrentDestination(
                        findDestinationByName(destination.name)
                      )
                    }
                    className={destination.name===currentDestination.name ? "border_bottom pb-3" : "cursor-pointer"}
                  >
                    {destination.name}
                  </p>
                );
              })}
            </div>
            <div className="grid place-items-center xl:place-items-start">
              <h2 className="font-serif uppercase text-[56px] leading-normal sm:text-[80px] xl:text-[100px]  mt-[20px] sm:mt-8 xl:mt-9">
                {currentDestination.name}
              </h2>
              <p className="text-softBlue text-center text-[15px] leading-[25px] sm:text-base sm:leading-7 max-w-[327px] xl:text-lg sm:max-w-[573px] xl:max-w-[444px] xl:mt-[14px] xl:text-start">
                {currentDestination.description}
              </p>
            </div>
            <div className="bg-[#383B4B] w-[327px] h-[1px] sm:w-[573px] flex justify-center mx-auto my-8 sm:mt-12 mb-7 "></div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center xl:justify-start xl:text-start xl:gap-20 text-center leading-normal mb-14 uppercase">
              <div className="flex flex-col gap-3">
                <p className="text-softBlue font-barlowCon text-sm tracking-[2.36px] ">
                  AVG. DISTANCE
                </p>
                <p className="font-serif text-[28px]">
                  {currentDestination.distance}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-softBlue font-barlowCon text-sm tracking-[2.36px] ">
                  Est. travel time
                </p>
                <p className="font-serif text-[28px]">
                  {currentDestination.travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Destination;
