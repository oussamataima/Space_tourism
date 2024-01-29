/* eslint-disable react/prop-types */

const Button = ({ text, classes, eventHandler }) => {
  return (
    <button
      onClick={eventHandler}
      className={`bg-white w-[150px] md:w-[242px] lg:w-[274px] rounded-full aspect-square uppercase
       tracking-[1.25px] text-xl md:text-3xl leading-normal font-serif flex justify-center
        items-center text-darkBlue hover:outline transition-all duration-100 hover:outline-white/10 hover:outline-[44px] ${classes}`}
    >
      {text}{" "}
    </button>
  );
};

export default Button;
