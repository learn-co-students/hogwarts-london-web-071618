import React from 'react'

const pigImage = 'https://image.shutterstock.com/image-vector/pig-glasses-icon-260nw-457901635.jpg'
const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
const medal = 'highest medal achieved'

const HogDetails = ({ hog, deselectHog }) => // we only have access to hog passed through the prop, if we want to use another prop we need to added between the curly b
  <div className='hog-details'>
    <h1> {hog.name}</h1>
    <span>Specialty: {hog.specialty} </span>
    {hog.greased }
    <img src={pigImage} />
    <p> Weight: {hog[weight]}</p>
    <p> Medal: {hog[medal]}</p>
    <button onClick= {deselectHog}> Back to List </button>
  </div>

export default HogDetails
