import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList'
import HogDetails from './HogDetails'

class App extends Component {

  state = {
    hogs: hogs,
    selectedHog: undefined,
    showGreasedOnly: false,
  }


  selectHog = (hog) => {
    this.setState({ selectedHog: hog})
  }

  deselectHog =() => {
    this.setState({ selectedHog: undefined})
  }

  toggleGreased = () =>{
    this.setState({ showGreasedOnly: !this.state.showGreasedOnly})
  }


  render() {
    const filteredHogs = this.state.showGreasedOnly ? hogs.filter(hog => hog.greased === true) : hogs

    return (
      <div className="App">
          < Nav />
            <div>
              <button onClick={this.toggleGreased}> SHOW GREASED ONLY: {this.showGreasedOnly ? 'ON' : 'OFF'} </button>
            </div>
          <br/>
          <br/>

          {this.state.selectedHog ?
            <HogDetails hog={this.state.selectedHog} deselectHog={this.deselectHog}/>
            : < HogList  hogs={filteredHogs} selectHog ={this.selectHog}/>
          }
      </div>
    )
  }
}

export default App;
