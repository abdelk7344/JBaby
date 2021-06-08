import React from 'react'
import Status from './Status'
import DeservePoints from './DeservePoints'

class AnswerForm extends React.Component{

    constructor(){
        super()
        this.state = {currIndex:0, correct: 0, wrong: 0, mula: 0, remquestions: 0, isCorrect:true,seconds:0,isPaused:false,interval:null}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleYes=this.handleYes.bind(this)
        this.handleNo=this.handleNo.bind(this)
        this.fullReset=this.fullReset.bind(this)
    }

    componentDidMount(){
        let myInterval=setInterval(() => {
            this.setState(prevState=>{
                if(!this.state.isPaused){
                    return {
                        seconds:prevState.seconds+1,
                        interval:myInterval
                    }

                }
                else{
                    return {interval:myInterval}
                }
            })
        }, 1000);
        this.setState(
            {remquestions: this.props.count-1}
        )
    }
    handleSubmit(event) {
        event.preventDefault()
        if (document.getElementById('answer').value.toUpperCase()===this.props.data[this.state.currIndex].answer.toUpperCase()){
            this.setState(prevState=>{
                return (
                    {currIndex: prevState.remquestions===0?prevState.currIndex:prevState.currIndex+=1,
                    correct: prevState.correct+=1,
                    isCorrect:true,
                    mula: prevState.mula+=this.props.data[this.state.currIndex].value,
                    remquestions: prevState.remquestions-=1
                    }
                )
            })
            this.fullReset()
        }

        else{
            this.stop()
            this.setState(prevState=>{
                return ({isCorrect: false}
                )
            })
        }

    }

    handleYes(){
        this.fullReset()
        this.setState(prevState=>{
            return (
                {currIndex: prevState.remquestions<=0?prevState.currIndex:prevState.currIndex+=1,
                correct: prevState.correct+=1,
                isCorrect:true,
                mula: prevState.mula+=this.props.data[this.state.currIndex].value,
                remquestions: prevState.remquestions-=1
                }
            )
        })  
    }
    handleNo(){
        this.fullReset()
        this.setState(prevState=>{
            return (
                    {currIndex: prevState.remquestions<=0?prevState.currIndex:prevState.currIndex+=1,
                    wrong: prevState.wrong+=1,
                    isCorrect:true,
                    mula: prevState.mula-=this.props.data[this.state.currIndex].value,
                    remquestions: prevState.remquestions-=1 
                    }
                )
            })
    }
    fullReset(){
        this.setState({seconds:0,isPaused:false})
    }
    stop(){
        this.setState({isPaused:true})
    }
    clear(){
        
        clearInterval(this.state.interval)
    }

    render(){
        if(this.state.seconds===10){//total seconds to wait
            this.handleNo()
        }
        if (this.state.remquestions ===-1){
            console.log('clear')
            this.clear()
        }
        console.log("interval: "+this.state.interval)
        console.log("Answer: "+this.props.data[this.state.currIndex].answer)
        console.log("Current Index: "+this.state.currIndex)
        console.log("Remaining questions: "+this.state.remquestions)
        
        return (
            this.state.remquestions===-1? 
            <div>
                <h1>Game Over</h1>
                <Status correct = {this.state.correct} wrong = {this.state.wrong} mula = {this.state.mula} remquestions = {this.state.remquestions}/>
            </div>
            :
            <div>
                <h4>{this.state.seconds}</h4>
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




    
// newInterval(){
//     let myInterval=setInterval(() => {
//         this.setState(prevState=>{
            // if (!this.state.isPaused){
            //     return {
            //     seconds:prevState.seconds+1,
            //     interval:myInterval
            //     }
            // }
//         }
//         )
//     }, 1000);

// }
// componentDidMount(){
//     this.newInterval()
// }
// resetBtn(event){
//     event.preventDefault()
//     this.setState({seconds:0,isPaused:false})
// }
// reset(){
//     this.stop()
//     this.setState({seconds:0,isPaused:false})
// }
// stop(){
//     this.setState({isPaused:true})
// }
