import React, { Component } from 'react';
import * as RB from 'react-bootstrap';

const patternUrl = 'http://ngocto.com/api/randomizePattern.php';
class RPattern extends Component {
  constructor() {
    super();
    this.state = {
      patterns : []
    }
  }
  fetchRPattern = () => {
    fetch(patternUrl)
    .then(results => {
      return results.json();
    })
    .then(data => {
      this.setState({
        patterns: data
      })
    })
  }
  render() {
    const {patterns} = this.state;
    return (
      <div>
        <RB.Button id="patternRandomize" variant="link" onClick={this.fetchRPattern}>Random Pattern</RB.Button>
        {patterns.map((pattern) => 
          <div key={pattern.id} className="item-container">
            <h3 className="h5">{pattern.title}</h3>
            <a href={pattern.url}><img src={pattern.badgeUrl} alt={pattern.title}/></a>
          </div>
        )}
      </div>
    )
  }
}

export default RPattern;
