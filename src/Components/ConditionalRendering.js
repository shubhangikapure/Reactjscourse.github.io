// 1.if/else
// 2.Element Variable
// 3.Ternary Conditional  Operator
//short cut operator

import React, { Component } from 'react'

export class ConditionalRendering extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn:true
             
        }
    }

    render() {
        return this.state.isLoggedIn && <div>welcome shubhanfi</div>
        // return(
        //     this.state.isLoggedIn?
        //     <div>welcome shubhangi</div>:
        //     <div>welcome guest</div>
        // )
        // let message
        // if(this.state.isLoggedIn){
        //     message=<div>welcome shubhangi</div>
        // }else{
        //     message=<div>welcome guest</div>
        // }
        // return<div>{message}</div>
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome shubhangi</div>
        //     )
        // }
        // else{
        //     return(
        //         <div>Welcome guest</div>
        //     )
        // }
        // return (
        //     <div>
        //          <h1>Welcome shubhangi</h1>
        //         <h1>Welcome guest</h1>
        //     </div>
        //)
    }
}

export default ConditionalRendering
