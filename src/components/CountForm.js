import React from 'react'
import AnswerForm from './AnswerForm'


class CountForm extends React.Component{

    constructor(){
        super()
        this.state = {questionCount: '', parent: true, child: false, data: []}
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(event){
        event.preventDefault()
        fetch('http://jservice.io/api/random?count='+document.getElementById('1').value)
            .then(response => response.json())
            .then(response => {
                this.setState({questionCount: document.getElementById('1').value, parent: false, child: true, data: response})

            })

    }


        render(){
            return(
                <div>
                {this.state.parent &&
                <div>
                    <p> How many questions would you like?</p>
                    <form onSubmit = {this.handleSubmit} > 
                        <input id = '1' type = 'number' placeholder ='e.g. 20' name = 'questionCount' ></input>
                        <button>Submit</button>
                    </form>
                    <p>Questions: {this.state.questionCount}</p>
  
                </div>}

                    <AnswerForm show = {this.state.child} data = {this.state.data}/>
                </div>
          
                

            )
        }




}


export default CountForm