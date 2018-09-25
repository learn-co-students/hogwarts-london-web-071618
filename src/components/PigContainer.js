import React, { Component } from 'react'
import PigList from './PigList.js'
import UserControl from './UserControl.js'

export default class PigContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pigs: props.pigData
        }
    }

    filterPigs = () => {
        const greasedPigs = this.state.pigs.filter(pig => pig.greased === true)
        this.state.pigs === greasedPigs ? (
            this.setState({
                pigs: this.props.pigData
            })
        ) : (
            this.setState({
                pigs: greasedPigs
            })
        )

    }

    sortPigs = () => {
        const shortHand = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
        const sortedPigs = this.state.pigs.sort((a,b) => (a[shortHand] > b[shortHand]) ? -1 : ((b[shortHand] > a[shortHand]) ? 1 : 0)); 
        this.setState({
            pigs: sortedPigs
        })
    }

    render(){
        return(
            <div>
            <UserControl filterPigs={this.filterPigs} sortPigs={this.sortPigs}/>
            <PigList pigs={this.state.pigs}/>
            </div>

        )
    }
}