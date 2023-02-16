import React from "react";
import "../css/Words.css";

export default function Words({ wrd }) {
  return (
    <div>
      <div className="div1">
        <h5>Cooming Soon</h5>
        <h1 className="css-fix">{wrd}</h1>
      </div>
      <div></div>
    </div>
  );
}
