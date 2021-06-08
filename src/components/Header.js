import React from 'react'
import './mystyles.css'
import musica from '../music.mp3'

class Header extends React.Component{
    constructor(){
        super()
        this.state={isPlaying:false}
        this.playMusica= this.playMusica.bind(this)
        this.pauseMusica= this.pauseMusica.bind(this)
    }
    playMusica(){
        document.getElementById('play').play();
        this.setState({isPlaying:true})
    }
    pauseMusica(){
        document.getElementById('play').pause();
        this.setState({isPlaying:false})
    }


    render(){

        return(
            <div>
                <h1 className = 'myheader'>Jeopardy! Training</h1>
                <h3 className = 'myheader'>Just choose how many questions you want to test yourself on.  Then, enter your answers below and see how many you can get correct!</h3>
                <button onClick={this.state.isPlaying? this.pauseMusica:this.playMusica}>{this.state.isPlaying? "Pause Music": "Play Music"}</button>
                <hr/><br/>
                <audio  id="play"  src={musica} controls loop hidden/>
            </div>
        )
    }
}


export default Header