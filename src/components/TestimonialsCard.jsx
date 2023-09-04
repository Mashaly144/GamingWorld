import React from "react";
import { AiFillStar } from "react-icons/ai";

const TestimonialsCard = ({ cardData }) => {
  return (
    <div className="container">
      <div className="flex-between">
        <div className=" gap-3">
          <div className="flex">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div>{cardData.description}</div>
          <div className="flex-between">
            <div className="flex gap-5">
              <img src={cardData.img} />
              <h1>{cardData.userName}</h1>
              <p>{cardData.Career}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
