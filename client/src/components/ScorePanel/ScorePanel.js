import React from "react";
import "./ScorePanel.css";

const ScorePanel = props => <h2 className="scorePanel">Current Score: {props.score}</h2>;

export default ScorePanel;