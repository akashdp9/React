import React, { Component } from 'react';
import './App.css';


class todo extends Component{
  constructor(props){
  super(props);
}

decreaseValue(){
  this.props.max()
}




render(){
  this.state={
    count:1
  };
  
}
}



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      maxlength:250
    }
    this.decrement = this.decrement.bind(this)
  }

  decrement(){
    this.setState({
      text:this.state.maxlength - 1
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="textar">
            <div className="textadjust">
              <textarea rows="6" cols="50" placeholder="todo list" maxLength="250" max={this.decrement}/> 
            <label>max length:{this.state.text}</label>
            </div>
            <div>
              <button className="btn">Add</button>
            </div>
          </div>
         <div>
           <div className="msg">
             <input type="checkbox"/>
             <div></div>
           </div>
         </div>
        </div>
      
      </div>
    );
  }
}

export default App;
