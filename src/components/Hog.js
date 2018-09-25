import React from 'react'

const Hog = ({ hog, selectHog }) => { 
  // by using the curly we can add text before the return..
  // const imageUrl = require(`../hog-imgs/${props.hog.name.toLowerCase().replace(/\s+/g, '_')}.jpg`) // using regular expressions
  const fileName = hog.name
    .toLowerCase()
    .replace(/\s/g, '_')
  const imageURL = require(`../hog-imgs/${fileName}.jpg`)

  return (
    <div onClick={() => selectHog(hog)} className='ui eight wide column'>
      <p> {hog.name} </p>
      <img src={imageURL} />
    </div>
  )
}
export default Hog
