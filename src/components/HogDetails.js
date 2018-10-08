import React from 'react'

const greasedImage = 'https://www.texasrefinery.com/wp-content/uploads/2015/06/drip-product-desc-icon.png'
const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

const HogDetails = props =>
  <div className='hog-details'>
    <h1>{props.hog.name}</h1>
    <span>Speciality: {props.hog.specialty} </span>
    {props.hog.greased && <img src={greasedImage} />}
    <p> weight: {props.hog[weight]}</p>
    <button onClick={props.deselectHog}> BACK TO LIST </button>
  </div>

export default HogDetails
