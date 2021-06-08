import React from 'react'
import Header from './Header'
import CountForm from './CountForm'
import musica from '../music.mp3'

function App() {
  return (
    <div>
      <audio controls autoPlay loop>
        <source src={musica} />
      </audio>
      <Header/>
      <CountForm/>

    </div>
      // <h1>Hello World</h1>
  );
}

export default App;
