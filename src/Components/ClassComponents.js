import React, { Component } from 'react'

export class ClassComponents extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <div>
           <h1> Welcome {this.props.name} a.k.a {this.props.age}
           </h1>
           </div>
        )
    }
}

export default ClassComponents
