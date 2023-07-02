import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {

    constructor(props) {
        super(props)
        this.state = {
             name:'shubhangi'
        }
        console.log('Lifecycle A constructor')
    }
    static getDerivedStateFromProps(Props, State) {
        console.log('Lifecycle A getDerivedStateFromProps')
    return null
    
    }
    componentDidMount(){
        console.log('Lifecycle A componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(preProps,prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
    }
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    changeState=()=>{
        this.setState({
            name:'Codevolution'
        })
    }
    render() {
        console.log('LifecycleA render')
        return (
            <div>
            <div>
                Lifecycle A
            </div>
            <button onClick={this.changeState}>Change State</button>
            <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
