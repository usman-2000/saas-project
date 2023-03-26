import React from "react";
import "../styles/connect.css";
import Button from "./Button";
import Saass8 from "../images/Saass8.png";

export default function Connect() {
  return (
    <div className="connect-cont">
      <div className="connect-image-cont">
        <img src={Saass8} alt="" />
      </div>
      <div className="connect-detail-cont">
        <h1>Connect With Our Sales Team.</h1>
        <p className="connect-main-para">
          Our sales team always active to support you. Any kind of questions
          about to our product they can answer to you.
        </p>
        <div className="connect-input-cont">
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <textarea name="" id="text-area" cols="74" rows="3"></textarea>
        </div>
        <div className="checkbox-cont">
          <input type="checkbox" name="" id="" />
          <p>
            I agree that braintree may contact me at the email address or phone
            number above.
          </p>
        </div>
        <Button className="btn-hero submit" name="submit" />
      </div>
    </div>
  );
}
