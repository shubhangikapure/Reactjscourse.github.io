import React, { Component } from 'react'

export class StateandPropsDestrucingclass extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
             
    //     }
    // }

    render() {
        const {name,age}=this.props
      // const{state1,state2}=this.state
        return (
            <div>
                welcome {name} a.k.a {age}
            </div>
        )
    }
}

export default StateandPropsDestrucingclass
