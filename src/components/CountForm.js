import React from 'react'


class CountForm extends React.Component{

    constructor(){
        super()
        this.state = {questionCount: ''}
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(event){
        event.preventDefault()


        this.setState({questionCount: document.getElementById('1').value})
        console.log(document.getElementById('1').value)
        console.log(this.state.questionCount)

    }


        render(){
            return(
                <div>
                    <p> How many questions would you like?</p>
                    <form onSubmit = {this.handleSubmit} > 
                        <input id = '1' type = 'number' placeholder ='e.g. 20' name = 'questionCount' ></input>
                        <button>Submit</button>
                    </form>
                    <p>Questions: {this.state.questionCount}</p>
                </div>
                

            )
        }




}


export default CountForm