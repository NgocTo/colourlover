import React, { Component } from 'react';
import Color from './Color';
// import './App.css';

const paletteUrl = '//www.colourlovers.com/api/palettes?format=json';
class Palette extends Component {
  constructor() {
    super();
    this.state = {
      palettes : []
    }
  }
  componentDidMount() {
    fetch(paletteUrl)
    .then(results => {
      return results.json();
    })
    .then(data => {
      this.setState({
        palettes: data
      })
    })
  }
  render() {
    const {palettes} = this.state;
    return (
      <div className="row">
      
      <input type="text" id="hexValue" className="hidden"></input>
      {palettes.map((palette) => 
        <div key={palette.id} className="item-container col-12 col-md-6 col-lg-4">
          <h3 className="h5">{palette.title}</h3>
          <div>
            {palette.colors.map((color,i) => 
            <Color color={color} key={i}  />
            )}
          </div>
        </div>
      )};
      </div>
    )
  }
}

export default Palette;
