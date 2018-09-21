import React, { Component } from 'react';
import '../App.css';

export default class Hog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showingDetails: false,
      cardVisible: true
    }
  }

  toggleDetails = () => {
    if (this.state.showingDetails) {
      this.setState({showingDetails : false})
    } else{
      this.setState({showingDetails : true})
    }
  }

  makeImageName = (hogName) => {
    let modName = hogName.toLowerCase()
    return modName.split(' ').join('_')
  }

  toggleHideCard = () => {
    this.setState({cardVisible: !this.state.cardVisible})
  }

  render() {
    let display

    if(this.state.cardVisible) {
      if (this.state.showingDetails) {
        display = <div key={this.props.hog.name} className="pigTile"  onClick={this.toggleDetails} visible>
            <div className="hide"><button onClick={this.toggleHideCard}>X</button></div>
              <div onClick={this.toggleDetails}> 
                    <h3>{this.props.hog.name}</h3>
                    <h5>Specialty: {this.props.hog.specialty}</h5> 
                    <h5>Greased? {this.props.hog.greased ? "Yes" : "No"}</h5> 
                    <h5>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</h5>
                    <h5>Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h5>
              </div>
        </div>
      } else {
        display = 
        <div key={this.props.hog.name} className="pigTile">
            <div className="hide"><button onClick={this.toggleHideCard}>X</button></div>
                <div onClick={this.toggleDetails}> 
                  <h3>{this.props.hog.name}</h3>
                  <img src={require(`../hog-imgs/${this.makeImageName(this.props.hog.name)}.jpg`)} alt={this.props.hog.name} />
              </div> 
        </div>
      }
    } else {
      display = null
    }
         
    return (
      <div>{display}</div>
    )
  
  }
  
}

