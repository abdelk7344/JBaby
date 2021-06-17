import React from 'react'
import Header from './Header'
import CountForm from './CountForm'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(){
    super()
    this.state={darkTheme:false}
    this.changeTheme= this.changeTheme.bind(this)
  }
  changeTheme(){
    this.setState(prevState=>{
        return({darkTheme: !prevState.darkTheme})
    })
  }



  render(){
    return (
      <div className="appClass">
        <Header changeTheme={this.changeTheme} darkTheme={this.state.darkTheme}/>
        <CountForm darkTheme={this.state.darkTheme}/>

      </div>
    );
  }
}

export default App;
