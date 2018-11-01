import React, { Component } from 'react'
import '../App.css'
import Nav from './Nav'
import Hog from './Hog'
import HogDetails from './HogDetails'
import FilterHogs from './FilterHogs'
import hogs from '../porkers_data'

class App extends Component {
  state = {
    selectedHog: null,
    greased: false
  }

  handleClick = (hog) => {
    this.setState({selectedHog: hog})
  }

  hogURL = (hog) => {
    const correctName = hog.name.toLowerCase().replace(/ /g, '_')
    return require('../hog-imgs/' + correctName + '.jpg')
  }

  deSelectHog = () =>
    this.setState({selectedHog: null})

  radioHandler = () => {
    if (this.state.greased === false){
      this.setState({greased: true})
    } else if (this.state.greased === true){
      this.setState({greased: false})
    }
  }

  isGreased = (hogs) => {
    return hogs.filter(hog => (hog.greased) ? hog : null)
  }
  
  sortByHandler = (event) => {
    
    if(event.target.value === 'name'){
      
    }(event.target.value === '')
  }


  render () {
    {console.log(this.isGreased(hogs))}
    return (
      <div className='App'>
        <Nav />
        <FilterHogs radioHandler={this.radioHandler}/>

      
      
        {(this.state.selectedHog) ?
          <HogDetails deSelectHog={this.deSelectHog} hogURL={this.hogURL} hog={this.state.selectedHog} />
        : (this.state.greased) ? 
        <Hog handleClick={this.handleClick} hogURL={this.hogURL} hogs={this.isGreased(hogs)} /> 
        : <Hog handleClick={this.handleClick} hogURL={this.hogURL} hogs={hogs} />}
      </div>
    )
  }
}

export default App
