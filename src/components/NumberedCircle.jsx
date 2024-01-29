// eslint-disable-next-line react/prop-types
const NumberedCircle = ({ text, active ,id ,eventHandler }) => {
  return (
    <div
      className={`w-10 sm:text-[24px] xl:w-20 xl:text-[32px]  sm:w-[60px] font-serif flex justify-center items-center aspect-square rounded-full cursor-pointer hover:bg-white/75 ${
        active ? "bg-white text-darkBlue" : "border-[2px] border-white/25 text-white"
      }` } id={id} onClick={eventHandler}
    >
      {text}
    </div>
  );
};

export default NumberedCircle;
