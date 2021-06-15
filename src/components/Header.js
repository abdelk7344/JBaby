import React from 'react'
import musica from '../music.mp3'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeMute,faVolumeUp,faSun,faMoon } from '@fortawesome/free-solid-svg-icons'

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
        if(this.props.darkTheme){
            document.getElementById('root').style.background='linear-gradient(90deg, #011a27 50%, #063852 50%)'
        }
        else{
            document.getElementById('root').style.background='linear-gradient(90deg, rgba(245,93,62,1) 50%, rgba(118,190,208,1) 50%)'
        }
        return(
            <div id="header" className = {!this.props.darkTheme?'container componentStyling heading':'container componentStyling darkheading'}>
                <h1>Quikwiz!</h1>
                {/* <Button className='buttonSpace' variant='secondary' onClick={this.state.isPlaying? this.pauseMusica:this.playMusica}>{this.state.isPlaying? "Pause Music": "Play Music"}</Button>
                <Button className='buttonSpace' variant='secondary' onClick={this.props.changeTheme}>Dark Mode</Button> */}
                <Button className='buttonSpace' variant='secondary' onClick={this.state.isPlaying? this.pauseMusica:this.playMusica}>{this.state.isPlaying? <FontAwesomeIcon icon={faVolumeMute} size="lg" />: <FontAwesomeIcon icon={faVolumeUp} size="lg"/>}</Button>
                <Button className='buttonSpace' variant='secondary' onClick={this.props.changeTheme}>{this.props.darkTheme?<FontAwesomeIcon icon={faSun} size="lg" />:<FontAwesomeIcon icon={faMoon} size="lg" />}</Button>
                <audio  id="play"  src={musica} controls loop hidden/>
            </div>
        )
    }
}


export default Header