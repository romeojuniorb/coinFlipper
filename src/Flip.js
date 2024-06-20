import React, { Component } from "react";
import Coin from "./Coin";
import "./Flip.css";

class Flip extends Component {
  static defaultProps = {
    title: "Let's Flip a Coin",
    sides: ["heads", "tails"],
  };

  constructor(props) {
    super(props);
    this.state = { side: "heads", numFlips: 0, heads: 0, tails: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  generate() {
    const newSide =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    this.setState(prevState => ({
      side: newSide,
      numFlips: prevState.numFlips + 1,
      heads: newSide === "heads" ? prevState.heads + 1 : prevState.heads,
      tails: newSide === "tails" ? prevState.tails + 1 : prevState.tails,
    }));
  }

  handleClick() {
    this.generate();
  }

  render() {
    return (
      <section className="Flip">
        <h1>{this.props.title}</h1>
        <div>
          <Coin side={this.state.side} />
        </div>
        <button onClick={this.handleClick}>Flip Coin</button>
        <h3>You have flipped the coin {this.state.numFlips} times</h3>
        <h3>
          Heads: {this.state.heads}, Tails: {this.state.tails}
        </h3>
      </section>
    );
  }
}

export default Flip;
