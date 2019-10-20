import React, { Component } from 'react'

export default class Timer extends Component {

    state = {
     count: 0   
    }
    
    render() {

        return (
            <div>
                <h1>Current Count: {this.state.count}</h1>
            </div>
        )
    }

    componentDidMount(){
        this.myInterval = setInterval(() => {
            this.setState( prevState => ({ 
                count: this.state.count + 1 
            }))
        }, 1000)
    }
}
