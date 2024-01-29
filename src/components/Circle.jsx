/* eslint-disable react/prop-types */

const Circle = ({ active, name ,eventHandler }) => {
  return (
    <div
      className={`w-[10px] lg:w-[15px] aspect-square rounded-full cursor-pointer hover:bg-white/75 ${
        active ? "bg-white" : "bg-white/20"
      }`}
      title={name}
      onClick={eventHandler}
    ></div>
  );
};

export default Circle;
