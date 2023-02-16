import React from "react";
import "../css/store.css";
import applestore from "../images/apple-store.png";
import googleplay from "../images/google-play.png";

export default function stores() {
  return (
    <div className="container1">
      <img src={applestore}></img>

      <img src={googleplay}></img>
    </div>
  );
}
