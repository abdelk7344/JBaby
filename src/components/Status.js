import React from 'react'

class Status extends React.Component{
    render(){
        return(
        <div>
            <h4>Correct: {this.props.correct}</h4>
            <h4>Wrong: {this.props.wrong}</h4>
            <h4>Mula: {this.props.mula}</h4>
            {this.props.remquestions>=0&&<h4>Remaining Questions: {this.props.remquestions}</h4>}
        </div>
        )

    }
}

export default Status;