import Button from "../Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="fixed z--10  inset-0">
        <picture>
          <source
            media="(min-width:1024px)"
            srcSet="/home/background-home-desktop.jpg"
          />
          <source
            media="(min-width:768px)"
            srcSet="/home/background-home-tablet.jpg"
          />
          <img
            className="w-full h-full"
            src="/home/background-home-mobile.jpg"
          />
        </picture>
      </div>
      <section className="relative z-50 mt-[28vh] mb-[15vh]  lg:mb-[130px] grid lg:grid-cols-2 place-items-center">
        <div className="">
          <h1 className="text-softBlue font-barlowCon tracking-[2.7px] leading-normal md:text-xl lg:text-[30px] lg:text-start text-center">
            SO, YOU WANT TO TRAVEL TO{" "}
            <span className="text-white font-serif text-[80px] md:text-[150px] block leading-[100px] md:leading-[150px] my-4 md:my-6 ">
              SPACE
            </span>
          </h1>
          <p className="text-softBlue text-center lg:text-start font-sans text-[16px] lg:text-lg leading-[25px] md:leading-[28px] lg:leading-8 max-w-[330px] md:max-w-[440px]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Button
          eventHandler={() => navigate("/destination")}
          text="explore"
          classes="mt-20 mb-12 lg:m-0 lg:mt-auto lg:ml-[165px] "
        />
      </section>
    </main>
  );
};

export default Home;
