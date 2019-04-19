import React, { Component } from 'react';
const $ = window.$;
class Color extends Component {
  state = {
    tooltip: "Copy Hex"
  };
  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
  }
  componentDidUpdate() {
    $('[data-toggle="tooltip"]').tooltip();
  }
  copyHex = (e, hex) => {
    e.preventDefault();
    var input = $('#hexValue').val(hex);
    input.select();
    document.execCommand('copy');
    this.setState({
      tooltip: "Copied"
    })
  }
  resetTooltip = e => {
    this.setState({
      tooltip: "Copy Hex"
    })
  }

  render() {
    const {color} = this.props;
    const {tooltip} = this.state;
    return (
      <span className="color"
        data-toggle="tooltip" 
        data-placement="top" 
        style={{backgroundColor: "#" + color, color: "#" + color}} title={tooltip}
        onClick={(e) => {
          this.resetTooltip()
          this.copyHex(e, color)
          $('.color').tooltip('dispose');
        }}>
        #{color}
      </span>
    );
  }
}

export default Color;
