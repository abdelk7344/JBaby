
import React from 'react'
import Status from './Status'
import DeservePoints from './DeservePoints'

class AnswerForm extends React.Component{


    constructor(){
        super()
        this.state = {currIndex:0, correct: 0, wrong: 0, mula: 0, remquestions: 0, isCorrect:true}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleYes=this.handleYes.bind(this)
        this.handleNo=this.handleNo.bind(this)
        
    }

    componentDidMount(){
        this.setState(
            {remquestions: this.props.count-1}
        )
        console.log('hi')
        console.log(this.props.count)
    }





    handleSubmit(event) {
        event.preventDefault()


   if (document.getElementById('answer').value.toUpperCase()===this.props.data[this.state.currIndex].answer.toUpperCase()){

            this.setState(prevState=>{

                return (
              
                    {currIndex:    this.state.remquestions>0 ? prevState.currIndex+=1 : prevState.currIndex,
                    correct: prevState.correct+=1,
                    isCorrect:true,
                    mula: prevState.mula+=this.props.data[this.state.currIndex].value,
                    remquestions: this.props.data.length - (this.state.correct+this.state.wrong) 
                    }
                )
            })
        }

        else{
            this.setState(prevState=>{
                return ({isCorrect: false}
                )
            })
        }

        }




        handleYes(){
            this.setState(prevState=>{
                return (
                    {currIndex:    this.state.remquestions>0 ? prevState.currIndex+=1 : prevState.currIndex,
                    correct: prevState.correct+=1,
                    isCorrect:true,
                    mula: prevState.mula+=this.props.data[this.state.currIndex].value,
                    remquestions: this.props.data.length - (this.state.correct+this.state.wrong) 
                    }
                )
            })

        
        }

        handleNo(){
        this.setState(prevState=>{
                return (
                    {currIndex:    this.state.remquestions>0 ? prevState.currIndex+=1 : prevState.currIndex,
                    wrong: prevState.wrong+=1,
                    isCorrect:true,
                    mula: prevState.mula-=this.props.data[this.state.currIndex].value,
                    remquestions: this.props.data.length - (this.state.correct+this.state.wrong) 
                    }
                )
            })
            console.log("No")

        }
       




    


    render(){
     console.log("R:"+ this.state.remquestions)
        this.state.currIndex===this.props.data.length-1 ? console.log("true") : console.log("false")

        return (
      
        this.state.remquestions === -1 ?
       
        <h1>GAME OVER</h1> :
            
            <div>
                  {console.log(this.props.data[this.state.currIndex].answer)}
                <form onSubmit = {this.handleSubmit}>
                    <h3>Question: {this.props.data[this.state.currIndex].question} </h3>
                    <h4>Category: {this.props.data[this.state.currIndex].category.title}</h4>
                    <h4>Value: {this.props.data[this.state.currIndex].value}</h4>
                    <input type='text' name="answer" id='answer'/>
                    <button type='submit'>Submit</button>
                </form>
                {!this.state.isCorrect&&<DeservePoints answer={this.props.data[this.state.currIndex].answer} yes={this.handleYes} no={this.handleNo}/>}
                
             <Status correct = {this.state.correct} wrong = {this.state.wrong} mula = {this.state.mula} remquestions = {this.state.remquestions}/>

            </div> 
            
           
        
     


        )
    }


}



export default AnswerForm;