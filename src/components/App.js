import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogList from './HogList'
import hogs from '../porkers_data';

class App extends Component {

  constructor() {
    super()
    this.state = {hogs: [],
    filteredHogs: []}
  }

  componentDidMount() {
    this.setState({hogs: hogs, filteredHogs: hogs})
  }

  reset = () => {
    this.setState({filteredHogs: this.state.hogs})
  }

  hardReset = () => {
    window.location.reload()
  }

  filterHogWeight = () => {
    const hogs = JSON.parse(JSON.stringify(this.state.hogs))
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    hogs.sort(function(a,b){
      return a[weight] - b[weight]
    })
    this.setState({filteredHogs: hogs})
  }

  filterHogName = () => {
    const hogs = JSON.parse(JSON.stringify(this.state.hogs))
    hogs.sort(function(a,b){
      var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
      if (nameA < nameB) //sort string ascending
          return -1 
      if (nameA > nameB)
          return 1
      return 0
    })
    this.setState({filteredHogs: hogs})
  }

  filterGreased = (boolean) => {
    const hogs = JSON.parse(JSON.stringify(this.state.hogs)).filter(hog => hog.greased === boolean)
    console.log(hogs)
    this.setState({filteredHogs: hogs})
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <div className="buttons">
            <label><b>Sort by: </b></label> &nbsp;
              <button onClick={this.filterHogName}>Name</button> &nbsp;
              <button onClick={this.filterHogWeight}>Weight</button> &nbsp;
            <label><b>Filter by: </b></label> &nbsp;
              <button onClick={() => this.filterGreased(true)}>Greased</button> &nbsp;
              <button onClick={() => this.filterGreased(false)}>Not Greased</button> &nbsp;
              {/* <button className="reset-button" onClick={this.reset}>Reset filter</button> &nbsp; */}
              <input className="reset-button" type="button" value="Reset" onClick={this.hardReset}></input>
          </div>
          < HogList hogs={this.state.filteredHogs} />
      </div>
    )
  }
}

export default App;
