import React from 'react'
import Header from './Header'
import CountForm from './CountForm'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="appClass">
      <Header/>
      <hr/><br/>
      <CountForm/>

    </div>
  );
}

export default App;
