import React, { Component } from 'react';
import * as RB from 'react-bootstrap';

class Paragraph extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
      background: "",
      title: "",
      subtitle: "",
      text: "",
      link: ""
    };
  }
  handleBackground = e => {
    this.setState({background: e.target.value})
  }
  handleTitle = e => {
    this.setState({title: e.target.value})
  }
  handleSubtitle = e => {
    this.setState({subtitle: e.target.value})
  }
  handleText = e => {
    this.setState({text: e.target.value})
  }
  handleLink = e => {
    this.setState({link: e.target.value})
  }
  render() {
    const { open } = this.state;
    const {background, title, subtitle, text, link} = this.state;
    return (
      <div>
        <RB.Button
          variant="link"
          onClick={() => this.setState({ open: !open })}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >Test Palette
        </RB.Button>
        
        <RB.Collapse in={this.state.open} className="text-left palette-collapse">
          <div className="row">
          
            <RB.Form className="col-12 col-md-4 offset-md-2">
              <RB.Form.Group as={RB.Row} controlId="background">
                <RB.Form.Label column xs="6" className="text-right">Background Color</RB.Form.Label>
                <RB.Col xs="4">
                  <RB.Form.Control type="text" placeholder="FFFFFF" value={background} onChange={(e) => {this.handleBackground(e)}} />
                </RB.Col>
              </RB.Form.Group>

              <RB.Form.Group as={RB.Row} controlId="title">
                <RB.Form.Label column xs="6" className="text-right">Title Color</RB.Form.Label>
                <RB.Col xs="4">
                  <RB.Form.Control type="text" placeholder="000000" value={title} onChange={(e) => {this.handleTitle(e)}} />
                </RB.Col>
              </RB.Form.Group>

              <RB.Form.Group as={RB.Row} controlId="subtitle">
                <RB.Form.Label column xs="6" className="text-right">Subtitle Color</RB.Form.Label>
                <RB.Col xs="4">
                  <RB.Form.Control type="text" placeholder="000000" value={subtitle} onChange={(e) => {this.handleSubtitle(e)}} />
                </RB.Col>
              </RB.Form.Group>

              <RB.Form.Group as={RB.Row} controlId="body">
                <RB.Form.Label column xs="6" className="text-right">Body Text Color</RB.Form.Label>
                <RB.Col xs="4">
                  <RB.Form.Control type="text" placeholder="000000" value={text} onChange={(e) => {this.handleText(e)}} />
                </RB.Col>
              </RB.Form.Group>

              <RB.Form.Group as={RB.Row} controlId="link">
                <RB.Form.Label column xs="6" className="text-right">Link Color</RB.Form.Label>
                <RB.Col xs="4">
                  <RB.Form.Control type="text" placeholder="000000" value={link} onChange={(e) => {this.handleLink(e)}} />
                </RB.Col>
              </RB.Form.Group>
            </RB.Form>

            <RB.Card className="offset-2 offset-md-0 col-8 col-md-4" style={{backgroundColor: "#" + background}}>
              <RB.Card.Body>
                <RB.Card.Title className="font-weight-bold h4" style={{color: "#" + title}}>Test Palette</RB.Card.Title>
                <RB.Card.Subtitle className="mb-2 text-muted" style={{color: "#" + subtitle}}>An example Usage</RB.Card.Subtitle>
                <RB.Card.Text style={{color: "#" + text}}>
                  Some quick example text to color the title, subtitle, content, link and background.
                </RB.Card.Text>
                <RB.Card.Text style={{color: "#" + text}}>
                  To color an element, change the input color in the text fields beside.
                </RB.Card.Text>
                <RB.Card.Link href="#" className="font-weight-bold" style={{color: "#" + link}}>A Link</RB.Card.Link>
                <RB.Card.Link href="#" className="font-weight-bold" style={{color: "#" + link}}>Another Link</RB.Card.Link>
              </RB.Card.Body>
            </RB.Card>  
          </div>
        </RB.Collapse>
      </div>
    )
  }
}

export default Paragraph;
