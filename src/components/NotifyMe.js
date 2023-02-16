import React from "react";
import "../css/NotifyMe.css";

export default function NotifyMe() {
  return (
    <div>
      <div className="NotifyContainer">
        <button id="bbt">Notify Me</button>
      </div>
      <div className="note">
      <span  >*Don't worry, we won't spam you</span>
      </div>
    </div>
  );
}
