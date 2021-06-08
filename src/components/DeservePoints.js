import React from 'react'
import {Button} from 'react-bootstrap'


class DeservePoints extends React.Component{

    constructor(){
        super()
        this.state = {}
    }




    render(){
        return(
            <div>
                <h4>The correct answer is {this.props.answer}, Do you believe that your answer would be marked correct?</h4>
                <Button onClick={this.props.yes}>Yes</Button>
                <Button onClick={this.props.no}>No</Button>
            </div>
        )
        
    }


}


export default DeservePoints










