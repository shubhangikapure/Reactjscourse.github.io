import React, { Component,PureComponent } from 'react'
import PureComponents from './PureComponents'
import ReguComp from './ReguComp'
import Memo from './Memo'

export class ParentComponent extends PureComponents {

    constructor(props) {
        super(props)
        this.state = {
            name:'Shubhangi'
             
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'shubhangi'
            })
        },2000)
    }

    render() {
        return (
            <div>
                Parent Component
                <Memo name={this.state.name}/>
               {/* <ReguComp name={this.state.name}
                ></ReguComp>
        <PureComponents name={this.state.name}/>*/}
            </div>
        )
    }
}

export default ParentComponent
