import React from "react";
import "../styles/ratecardcomponents.css";
import RateCard from "./RateCard";

export default function RateCardComponents() {
  return (
    <div className="ratecardcomp-cont">
      <RateCard
        className="hehe"
        h1="+22K"
        p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        laudantium!"
      />
      <RateCard
        h1="+35K"
        p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        laudantium!"
      />
      <RateCard
        h1="+66K"
        p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        laudantium!"
      />
    </div>
  );
}
