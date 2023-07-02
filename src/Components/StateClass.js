import React, { Component } from 'react'

export class StateClass extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message:'welcome Vistore'
             
        }
    }

    changeMessage(){
        this.setState({
            message:'thank you for subscribing'
        })

    }
    render() {
        return (
            <div>
               <h1>{this.state.message}</h1>
               <button onClick={()=>this.changeMessage()}>Subscriber</button>
            </div>
        )
    }
}

export default StateClass
