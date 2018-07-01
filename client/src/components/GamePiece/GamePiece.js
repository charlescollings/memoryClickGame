import React from "react";
import "./GamePiece.css";

const GamePiece = props => (
  <div className="card">
    <div onClick={() => props.trackChosen(props.id)} className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default GamePiece;

/*  click on image
    compare id of clicked image to image array
    if no match then save id of clicked image into array
    increment score
    re-render images randomly
    repeat
*/