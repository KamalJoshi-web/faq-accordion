import React from "react";
import Accordion from "./Accordion";
import { Text } from "../index";
import StarIcon from "../../assets/icon-star.svg";
import { QnA } from "./qna.js";

const Card = () => {
  return (
    <div className=" max-w-lg bg-White p-6 w-full rounded-xl shadow-xl my-10   ">
      {/* Heading */}
      <div className=" inline-flex gap-5">
        <img src={StarIcon} alt="star icon" />
        <Text fSize="text-6xl max-md:text-4xl">FAQs</Text>
      </div>
      {/* Dynamic QnA */}
      <div>
        {QnA.map((item, index) => (
          <Accordion key={index} Question={item.Ques} Answer={item.Ans} />
        ))}
      </div>
    </div>
  );
};

export default Card;
