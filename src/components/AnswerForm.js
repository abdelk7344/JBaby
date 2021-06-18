import React from 'react'
import Status from './Status'
import DeservePoints from './DeservePoints'
import { Button } from 'react-bootstrap';


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
        
        for (var i=0; i<100;i++){
            // console.log('question:' + i + this.props.data[i].question)
            // console.log('value:' + this.props.data[i].value )
        }
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
        let correctAnswer=this.props.data[this.state.currIndex].answer.replaceAll('<i>','').replaceAll('</i>','').replaceAll('<b>','').replaceAll('</b>','').replaceAll('\\', '').toUpperCase();

        if (this.props.data[this.state.currIndex].question===""){


            this.fullReset()
            // document.getElementById('answer').value=''
            this.setState(prevState=>{
                return (
                    {currIndex: prevState.remquestions<=0?prevState.currIndex:prevState.currIndex+=1,
                    correct: prevState.correct+=1,
                    isCorrect:true,
                    mula: prevState.mula+=500,
                    remquestions: prevState.remquestions-=1
                    }
                )
            })  
  

        }




       else if (document.getElementById('answer').value.toUpperCase()===correctAnswer){
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
            document.getElementById('answer').value=''
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

        var myvalue = this.props.data[this.state.currIndex].value;
        if (myvalue===null){
            myvalue = 500;
        }
  
        this.fullReset()
        document.getElementById('answer').value=''
        this.setState(prevState=>{
            return (
                {currIndex: prevState.remquestions<=0?prevState.currIndex:prevState.currIndex+=1,
                correct: prevState.correct+=1,
                isCorrect:true,
                mula: prevState.mula+=myvalue,
                remquestions: prevState.remquestions-=1
                }
            )
        })  
    }
    handleNo(){
        var myvalue = this.props.data[this.state.currIndex].value;
        if (myvalue===null){
            myvalue = 500;
        }

        this.fullReset()
        document.getElementById('answer').value=''
        this.setState(prevState=>{
            return (
                    {currIndex: prevState.remquestions<=0?prevState.currIndex:prevState.currIndex+=1,
                    wrong: prevState.wrong+=1,
                    isCorrect:true,
                    mula: prevState.mula-=myvalue,
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

        var myvalue = this.props.data[this.state.currIndex].value;
        if (myvalue===null){
            myvalue = 500;
        }

   

        // console.log('question'+ this.props.data[this.state.currIndex].question)
        if(this.state.seconds===20){//total seconds to wait
            if(this.props.data[this.state.currIndex].question!==""){
           
            this.handleNo()
            }
        }
        if (this.state.remquestions===-1){
            this.clear()
        }

        if (this.props.data[this.state.currIndex].question===""){
   
            return(

                <div className={!this.props.darkTheme?'container componentStyling form':'container componentStyling darkform'}>
                <div className='topright'>Timer: {20}</div>
                <form onSubmit = {this.handleSubmit}>
                    <h4 className='jcard'>LUCKY WIZ!</h4>
                    <h3>You just earned a free $500</h3>

                    <br/>
                    <Button type='submit' variant="light">Next</Button>
                </form>
                {!this.state.isCorrect&&<DeservePoints answer={this.props.data[this.state.currIndex].answer} yes={this.handleYes} no={this.handleNo}/>}
                <Status correct = {this.state.correct} wrong = {this.state.wrong} mula = {this.state.mula} remquestions = {this.state.remquestions}/>

            </div> 



            )
        }
        
        return (
            this.state.remquestions===-1? 
            <div className={!this.props.darkTheme?'container componentStyling form':'container componentStyling darkform'}>
                <h1>Game Over</h1>
                <h4>Correct: {this.state.correct}</h4>
                <h4>Wrong: {this.state.wrong}</h4>
                <h4>Mula: {this.state.mula}</h4>
                <Button onClick={()=> {window.location.reload()}} variant='secondary'>Play Again</Button>
                {/* <Status correct = {this.state.correct} wrong = {this.state.wrong} mula = {this.state.mula} remquestions = {this.state.remquestions}/> */}
            </div>
            :
            <div className={!this.props.darkTheme?'container componentStyling form':'container componentStyling darkform'}>
                <div className='topright'>Timer: {20-this.state.seconds}</div>
                <form onSubmit = {this.handleSubmit}>
                    <h4 className='jcard'>{this.props.data[this.state.currIndex].category.title.toUpperCase()}<br/>${myvalue}</h4>
                    {/* {console.log('Current index: ' + this.state.currIndex)}
                    {console.log(this.props.data[this.state.currIndex].question)} */}
                    <h3>{this.props.data[this.state.currIndex].question}</h3>
                    <input type='text' name="answer" id='answer' className='form-control'/>
                    <br/>
                    <Button type='submit' variant="light">Submit</Button>
                </form>
                {!this.state.isCorrect&&<DeservePoints answer={this.props.data[this.state.currIndex].answer} yes={this.handleYes} no={this.handleNo}/>}
                <Status correct = {this.state.correct} wrong = {this.state.wrong} mula = {this.state.mula} remquestions = {this.state.remquestions}/>

            </div> 


        )

    }


}



export default AnswerForm;

