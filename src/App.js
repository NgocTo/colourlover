import React, { Component } from 'react';
import Palette from './Palette';
import Pattern from './Pattern';
import RPalette from './RPalette';
import RPattern from './RPattern';
import * as RB from 'react-bootstrap';
// import logo from './logo.svg';
import './App.css';
import Paragraph from './Paragraph';
// const $ = window.$;

class App extends Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <div className="App">
        <header className="shadow-sm">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
          <div className="container">
          <h1>Colours and Patterns</h1>
          <p>A simple listing of colors and patterns for you.</p>
        </div>
        </header>
        <main>
          <RB.Tabs defaultActiveKey="palette" id="tab" className="nav-tabs">
            <RB.Tab eventKey="palette" title="Palette">
              <section>
                <h2>♥ Palette Listing ♥</h2>
                <Paragraph background="" heading="" text="" link="" button="" buttonText=""/>
                <RPalette />
                <Palette />
              </section>
            </RB.Tab>
            <RB.Tab eventKey="pattern" title="Pattern">
              <section>
                <h2>♥ Pattern Listing ♥</h2>
                <RPattern />
                <Pattern />
              </section>
            </RB.Tab>
          </RB.Tabs>;
        </main>
      </div>
    );
  }
}

export default App;
