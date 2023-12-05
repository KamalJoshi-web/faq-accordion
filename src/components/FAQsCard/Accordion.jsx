import React, { useState } from "react";
import PlusIcon from "../../assets/icon-plus.svg";
import MinusIcon from "../../assets/icon-minus.svg";
import { Text } from "../index";

const Accordion = ({ Question, Answer }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className=" my-5 duration-300 ">
      {/* Question */}
      <div
        className="flex justify-between items-center my-5 duration-300 "
        onClick={handleVisibility}
      >
        <Text
          color=" text-Darkpurple hover:text-Purple"
          className=" cursor-pointer   w-[95%] max-md:w-[75%] "
        >
          {Question}
        </Text>
        <button>
          <img src={isVisible ? MinusIcon : PlusIcon} alt="plus Icon" />
        </button>
      </div>
      {/* Answer */}
      <div
        className={`  duration-300    ${
          isVisible
            ? "visible mb-5 h-full opacity-100   "
            : "invisible mb-0  h-0 opacity-0 "
        }`}
      >
        <Text color="text-Grayishpurple" fweight="font-normal" fSize="text-sm">
          {Answer}
        </Text>
      </div>
      {/* Line */}
      <hr className=" text-Grayishpurple opacity-10 border" />
    </div>
  );
};

export default Accordion;
