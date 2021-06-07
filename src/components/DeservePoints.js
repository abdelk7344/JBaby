import React from 'react'



class DeservePoints extends React.Component{

    constructor(){
        super()
        this.state = {}
    }




    render(){
        return(
            <div>
                <h4>The correct answer is {this.props.answer}, Do you believe that your answer would be marked correct?</h4>
                <button onClick={this.props.yes}>Yes</button>
                <button onClick={this.props.no}>No</button>
            </div>
        )
        
    }


}


export default DeservePoints










