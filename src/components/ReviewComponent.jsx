import React from "react";
import "../styles/reviewcomponent.css";
import rating from "../images/rating.png";
import Saass7 from "../images/Saass7.png";

export default function ReviewComponent() {
  return (
    <div className="review-main-cont">
      <h1>What our clients says</h1>
      <p className="review-main-cont-para">Lorem Ipsum is simply dummy text</p>
      <div className="review-cont">
        <div className="review-card">
          <div className="rating-star">
            <img src={rating} alt="" />
            <img src={rating} alt="" />
            <img src={rating} alt="" />
            <img src={rating} alt="" />
            <img src={rating} alt="" />
          </div>
          <p className="review-card-para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <img className="reviewer-image" src={Saass7} alt="" />
          <p className="reviewer-name">Courtney Henry</p>
        </div>
        <div className="review-card">
          <div className="rating-star">
            <img src={rating} alt="" />
            <img src={rating} alt="" />
            <img src={rating} alt="" />
            <img src={rating} alt="" />
            <img src={rating} alt="" />
          </div>
          <p className="review-card-para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <img className="reviewer-image" src={Saass7} alt="" />
          <p className="reviewer-name">Courtney Henry</p>
        </div>
      </div>
    </div>
  );
}
