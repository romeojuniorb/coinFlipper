import React, { Component } from "react";
import "./Coin.css";

class Coin extends Component {
  render() {
    const { side } = this.props;
    const imageSrc = side === "heads" ? "/headsIcon.png" : "/tailsIcon.png";
    const altText = side === "heads" ? "Heads" : "Tails";
    return (
      <div className="Coin">
        <img src={imageSrc} alt="{altText}" class="Coin" />
      </div>
    );
  }
}

export default Coin;
