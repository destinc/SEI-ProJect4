import React, { Component } from 'react'
class Ideas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ideas: []
        }
    }
    render() {
        return (
            <div className="Ideas">
                Ideas 
            </div>
        )
    }
}

export default Ideas