import React, { Component } from 'react'

export default class PigList extends Component {

    showDetails = (e) => {
        let detailsDiv = e.target.nextSibling
        if (detailsDiv.style.display === "block") {
            detailsDiv.style.display = "none"
        } else {
            detailsDiv.style.display = "block"
        }
    }

    render() {
        return (
            <div className="ui grid container">
            {this.props.pigs.map(pig => {
                return (
                    <div className="ui eight wide column">
                        <div className="ui card">
                            <div class="image"> 
                                <img src={require(`../hog-imgs/${pig.name.replace(/ /g,"_").toLowerCase()}.jpg`)} />
                            </div>
                            <div class="content">
                                <h2 className="header" onClick={this.showDetails}>{pig.name}</h2>
                                <div className="description" style={ {display: 'none'}} >
                                    <p>Specialty: {pig.specialty}</p>
                                    <p>Medal: {pig["highest medal achieved"]}</p>
                                    <p>Greased?: {pig.greased ? "Yes" : "No"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        )
    }
}