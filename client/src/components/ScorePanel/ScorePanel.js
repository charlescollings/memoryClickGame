import React from "react";
import "./ScorePanel.css";

const ScorePanel = props => <h2 className="title">Current Score: {props.score}</h2>;

export default ScorePanel;