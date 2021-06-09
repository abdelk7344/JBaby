import React from 'react'
import musica from '../music.mp3'
import {Button} from 'react-bootstrap'

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
            <div className = 'container componentStyling heading'>
                <h1>Jeopardy Training!</h1>
                <Button variant='secondary' onClick={this.state.isPlaying? this.pauseMusica:this.playMusica}>{this.state.isPlaying? "Pause Music": "Play Music"}</Button>
                <audio  id="play"  src={musica} controls loop hidden/>
            </div>
        )
    }
}


export default Header