import React from 'react'
import AnswerForm from './AnswerForm'
import {Button} from 'react-bootstrap'


class CountForm extends React.Component{

    constructor(){
        super()
        this.state = {questionCount: '', parent: true, child: false, data: []}
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(event){
        event.preventDefault()
        fetch('https://jservice.io/api/random?count='+document.getElementById('1').value)
            .then(response => response.json())
            .then(response => {
                this.setState({questionCount: document.getElementById('1').value, parent: false, child: true, data: response})
        })
    }


    render(){
        return(
            <div id="form">
                {this.state.parent &&
                <div className={!this.props.darkTheme?'container componentStyling form':'container componentStyling darkform'}>
                    <h4>Instructions</h4>
                    
                    <p>Quikwiz is a game that uses questions from the hit show Jeopardy!<br/> Just choose how many questions you want to test yourself on. <br/>Then, enter your answers below and see how many you can get correct!</p>
                    <form onSubmit = {this.handleSubmit} className='formSpace' > 
                        <p> How many questions would you like?</p>
                        <input style = {{width: '25%', margin: 'auto'}} id = '1' min='0' max='100' type = 'number' placeholder ='e.g. 20' name = 'questionCount' className='form-control'></input>
                        <br/>
                        <Button type='submit' variant='secondary'>Submit</Button>
                    </form>
                </div>}
                {this.state.child &&<AnswerForm darkTheme={this.props.darkTheme} count = {this.state.questionCount} show = {this.state.child} data = {this.state.data}/>}
            </div>
        )
    }

}


export default CountForm