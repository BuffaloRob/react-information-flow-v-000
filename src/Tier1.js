import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor() {
    super()
    const [c1, c2, c3] = this.generateColors();
    this.state = {
      color: c1,
      childColor: c2,
      grandchildColor: c3
    }
  }

  generateColors = (count=3) => {
    const colors = [getRandomColor()]
    for (let id =1; id < count; id++) {
      colors.push(getReducedColor(colors[colors.length - 1]))
    }
  }

  handleClick = () => {
    const [c1, c2, c3] = this.generateColors();
    this.setState({
      color: c1,
      childColor: c2,
      grandchildColor: c3
    })
  }

  handleChildClick = (e) => {
    e.stopPropagation();
    const [c2, c3] = this.generateColors(2);
    this.setState({
      childColor: c2,
      grandchildColor: c3
    })
  }

  handleGrandchildClick = (e) => {
    e.stopPropagation();
    const[c3] = this.generateColors(1)
    this.setState({
      grandchildColor: c3
    })
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return // <div onClick={() => {this.setState({color: "#000"})}} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
      <div onClick={this.handleclick} className="tier1" style={{ backgroundColor: this.state.color, color: this.state.color }}>
        <Tier2 handleClick={this.handleChildClick} handleChildClick={this.handleGrandchildClick} color={this.state.childColor} />
        <Tier2 handleClick={this.handleChildClick} handleChildClick={this.handleGrandchildClick} color={this.state.childColor} />
      </div>;
  }
}
