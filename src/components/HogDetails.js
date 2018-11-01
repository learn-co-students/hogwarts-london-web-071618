import React from 'react'

const HogDetails = props => {
  return <div className='ui grid container'>
    <div>
      <h1>{props.hog.name}</h1>
      <img src={props.hogURL(props.hog)} />
      <p>Weight: {props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
      <p>Highest medal achieved: {props.hog['highest medal achieved']}</p>
    </div>
    <button onClick={props.deSelectHog}>All</button>
  </div>
}

export default HogDetails
