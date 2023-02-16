import React from "react";
import fb from "../images/facebook.png";
import ig from "../images/instagram.png";
import tk from "../images/tiktok.png";
import tw from "../images/twitter.png";
import yt from "../images/youtube.png";
import "../css/SocialN.css";
import "../css/NotifyMe.css";

export default function SocialN() {
  return (
    <div>
      <div className="socialCont">
        <img id="sc" src={fb}></img>
        <img id="sc" src={tw}></img>
        <img id="sc" src={ig}></img>
        <img id="sc" src={tk}></img>
        <img id="sc" src={yt}></img>
      </div>
      <hr></hr>
      <div className="note">
        <span>
          Copyright <i class="fa fa-copyright" aria-hidden="true"></i> 2022
          Soora. All rights reserved
        </span>
      </div>
    </div>
  );
}
