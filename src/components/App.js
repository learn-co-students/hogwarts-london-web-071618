import React from 'react'

import '../App.css'
import Nav from './Nav'
import hogs from '../porkers_data'

import HogList from './HogList'
import HogDetails from './HogDetails'

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

class App extends React.Component {
  constructor () { // or just use state =
    super()
    this.state = {
      hogs: hogs, // or only hogs
      selectedHog: undefined,
      showGreasedOnly: false,
      sortBy: ''
    }
  }
  toggleGreased = () => {
    this.setState({ showGreasedOnly: !this.state.showGreasedOnly })
  }
  selectHog = (hog) => {
    this.setState({ selectedHog: hog })
  }

  deselectHog = () => {
    this.setState({ selectedHog: undefined })
  }

  sortHogs = (hogs) => {
    hogs = [...hogs] // sort is a mutating method and we dont want to mutate the state array
    // return a sorted version of the hogs

    switch (this.state.sortBy) {
      case 'name':
      // sortByName
        return hogs.sort((hogA, hogB) => {
          if (hogA.name > hogB.name) return 1
          if (hogB.name > hogA.name) return -1
          return 0
        })
      case 'weight':
        //  sortByWeight
        return hogs.sort((hogA, hogB) => hogA[weight] - hogB[weight])
      default:
        return hogs
    }
  }
    sortHogsBy = sortType => {
      this.setState({ sortBy: sortType })
    }

    render () {
    
      const { selectedHog, hogs, showGreasedOnly } = this.state
      const filteredHogs = showGreasedOnly
        ? hogs.filter(hog => hog.greased)
        : hogs

      const sortedHogs = this.sortHogs(filteredHogs)
      return ( // here we can use only expressions not if statements or more logic in the {} we need to return a result only
        <div className='ui grid container'>
          <Nav />
          <div className='buttons'>
            <button onClick={this.toggleGreased}>
            Show Greased only: {showGreasedOnly ? 'ON' : 'OFF'}
            </button>
            <br />
            <select onChange={(event) => this.sortHogsBy(event.target.value)}>
              <option value=''> Sort by ...</option>
              <option value='weight'> Weight</option>
              <option value='name'> Name</option>
            </select>
          </div>
          <br />
          <br />

          {
            selectedHog
              ? <HogDetails hog={selectedHog} deselectHog={this.deselectHog} />
              : <HogList hogs={sortedHogs} selectHog={this.selectHog} />
          }
        </div>
      )
    }
}

export default App
