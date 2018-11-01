import React from 'react'

const FilterHogs = props =>
  <div>
    <form>
      <label>Sort By</label>
      <select>
        <option value='name'>Name</option>
        <option value='weight'>Weight</option>
      </select>

      <label>Greased?</label>
      <input onChange={props.radioHandler} name='greased' type='checkbox' value='greased' label='greased' />
      <br />
    </form>
  </div>

export default FilterHogs
