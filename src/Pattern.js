import React, { Component } from 'react';

const patternUrl = 'http://ngocto.com/api/patterns.php';
class Pattern extends Component {
  constructor() {
    super();
    this.state = {
      patterns : []
    }
  }
  componentDidMount() {
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
      <div className="row">
      {patterns.map((pattern) => 
        <div key={pattern.id} className="item-container col-12 col-md-6 col-lg-4">
          <h3 className="h5">{pattern.title}</h3>
          <a href={pattern.url}><img src={pattern.badgeUrl} alt={pattern.title}/></a>
        </div>
      )};
      </div>
    )
  }
}

export default Pattern;
