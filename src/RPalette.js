import React, { Component } from 'react';
import Color from './Color';
import * as RB from 'react-bootstrap';

const paletteUrl = 'http://www.colourlovers.com/api/palettes/random?format=json';
class RPalette extends Component {
  constructor() {
    super();
    this.state = {
      palettes : []
    }
  }
  fetchRPalette = () => {
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
      <>
        <RB.Button id="paletteRandomize" variant="link" onClick={this.fetchRPalette}>Random Palette</RB.Button>
        <input type="text" id="hexValue" className="hidden"></input>
        {palettes.map((palette) => 
          <div key={palette.id} className="item-container">
            <h3 className="h5">{palette.title}</h3>
            <div>
              {palette.colors.map((color,i) => 
              <Color color={color} key={i}  />
              )}
            </div>
          </div>
        )}
      </>
    )
  }
}

export default RPalette;
