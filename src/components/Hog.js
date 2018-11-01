import React from 'react'

const Hog = props => {
  return (
    <div className='ui grid container'>
      {props.hogs.map(hog =>
        <div onClick={event => props.handleClick(hog)} key={hog.name} className='ui eight wide column pigTile'>
          <h1>{hog.name}</h1>
          <img src={props.hogURL(hog)} />
        </div>
      )}
    </div>
  )
}
export default Hog
