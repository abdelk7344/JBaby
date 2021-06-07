
import React from 'react'
import Status from './Status'

class AnswerForm extends React.Component{


    constructor(){
        super()
        this.state = {currIndex:0, correct: 0, wrong: 0, mula: 0, remquestions: 0}
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }




    

    handleSubmit(event) {
        event.preventDefault()

        if (document.getElementById('answer').value===this.props.data[this.state.currIndex].answer){
            this.setState(prevState=>{
                return (
                    {currIndex: prevState.currIndex+=1,
                    correct: prevState.correct+=1,
                    mula: prevState.mula+=this.props.data[this.state.currIndex].value,
                    remquestions: this.props.data.length - (this.state.currIndex+1) 
                    }
                )
            })
        }

        else{
            this.setState(prevState=>{
                return (
                    {currIndex: prevState.currIndex+=1,
                    wrong: prevState.wrong+=1,
                    mula: prevState.mula-=this.props.data[this.state.currIndex].value,
                    remquestions: this.props.data.length - (this.state.currIndex+1) 
                    }
                )
            })
        }

        }




    


    render(){

        return (
            

            this.props.show &&
            <div>
                  {console.log(this.props.data[this.state.currIndex].answer)}
                <form onSubmit = {this.handleSubmit}>
                    <h3>Question: {this.props.data[this.state.currIndex].question} </h3>
                    <h4>Category: {this.props.data[this.state.currIndex].category.title}</h4>
                    <h4>Value: {this.props.data[this.state.currIndex].value}</h4>
                    <input type='text' name="answer" id='answer'/>
                    <button type='submit'>Submit</button>
                </form>
             <Status correct = {this.state.correct} wrong = {this.state.wrong} mula = {this.state.mula} remquestions = {this.state.remquestions}/>
            </div>
        )
    }


}



export default AnswerForm;