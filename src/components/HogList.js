import React from 'react'

import Hog from './Hog'

// const HogList = props => // can be written as:  export default props => ....

const HogList = ({ hogs, selectHog }) =>
  <div className='ui grid container hog-list'>
    {/* next pass an array of hogs */}
    {
      hogs.map(hog =>
        <Hog
          hog={hog} // pass down each hog to hog.js
          selectHog={selectHog}
        />
      )
    }
  </div>

export default HogList
