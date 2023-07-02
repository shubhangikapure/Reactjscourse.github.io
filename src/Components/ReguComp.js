import React, { Component } from 'react'

export class ReguComp extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <div>
                Regular Components{this.props.name}
            </div>
        )
    }
}

export default ReguComp
