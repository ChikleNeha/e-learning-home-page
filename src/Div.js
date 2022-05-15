import React from "react";

export default function Div(props) {

  return (
    <div className = "the--divs">
      <div className="the--div--inside">
        <img src={props.item.image} />
        <h6>{props.item.p1}</h6>
        <p>{props.item.p2}</p>
      </div>
      
    </div>
  );
}
