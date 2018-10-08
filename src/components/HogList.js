import React from 'react'
import Hog from './Hog'

const HogList = props =>

  <div className='ui grid container hog-list'>
    {props.hogs.map(hog => <Hog hog={hog} selectHog={props.selectHog} />)}
  </div>

export default HogList
