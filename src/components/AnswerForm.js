import { ReactComponent } from '*.svg';
import React from 'react'

class AnswerForm extends ReactComponent{

    render(){
        return (
            <form>
                <h3>Question: Bla Bla Bla</h3>
                <h4>Category: Bla Bla Bla</h4>
                <h4>Value: Bla Bla Bla</h4>
                <input type='text' name="answer" id='answer'/>
                <button type='submit'>Submit</button>
            </form>
        )
    }


}



export default AnswerForm;