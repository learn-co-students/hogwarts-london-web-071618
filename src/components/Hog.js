import React from 'react'

const Hog = props => {
  const fileName = props.hog.name.toLowerCase().replace(/\s/g, '_')
  const imageURL = require(`../hog-imgs/${fileName}.jpg`)

  return (
    <div onClick={() => props.selectHog(props.hog)} className=' ui eight wide column'>
      <p> {props.hog.name}</p>
      <img src={imageURL} />
    </div>
  )
}

export default Hog
