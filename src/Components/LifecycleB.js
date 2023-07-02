import React, { Component } from 'react'

export class LifecycleB extends Component {

    constructor(props) {
        super(props)
        this.state = {
             name:'shubhangi'
        }
        console.log('Lifecycle B constructor')
    }
    static getDerivedStateFromProps(Props, State) {
        console.log('Lifecycle b getDerivedStateFromProps')
    return null
    
    }
    componentDidMount(){
        console.log('Lifecycle B componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(preProps,prevState){
        console.log('LifecycleB getSnapshotBeforeUpdate')
    }
    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
    }

    render() {
        console.log('LifecycleB render')
        return (
            <div>
                Lifecycle B
            </div>
        )
    }
}

export default LifecycleB
