import React, { Component } from 'react'

export default class UserControl extends Component {
    render() {
        return(
            <p>
                <button onClick={this.props.filterPigs}>Filter Greased Pigs</button>
                <button onClick={this.props.sortPigs}>Sort By Weight</button>
            </p>
        )
    }
}