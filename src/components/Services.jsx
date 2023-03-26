import React from "react";
import "../styles/services.css";
import Button from "./Button.jsx";
import Saass11 from "../images/Saass11.png";
import Saass12 from "../images/Saass12.png";
import Saass13 from "../images/Saass13.png";

export default function Services() {
  return (
    <div className="service-cont">
      <div className="service-first-cont">
        <h1>Build & Launch Without problems</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Button className="btn-hero btn2" name="Get Started" />
      </div>
      <div className="service-second-cont">
        <div className="service">
          <img src={Saass11} alt="" />
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h3>
        </div>
        <div className="service">
          <img src={Saass12} alt="" />
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h3>
        </div>
        <div className="service">
          <img src={Saass13} alt="" />
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h3>
        </div>
      </div>
    </div>
  );
}
