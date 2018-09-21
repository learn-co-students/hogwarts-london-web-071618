import React, { Component } from 'react';
import '../App.css';
import Hog from './Hog'

export default class HogList extends Component {

  constructor(props) {
    super(props)
    this.state = {toggleInfo: []}
  }

  render() {

    return (
      <div>
          {this.props.hogs.map(hog => 
             <Hog hog={hog} />
          )}
    </div>
    )
  }
}
