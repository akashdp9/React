import React, { Component } from 'react';
import './App.css';


class Calculator extends Component{
  constructor(props){
    super(props);
    this.state={
      value:this.props.value
    }
    this.PrintNine = this.PrintNine.bind(this)
    this.PrintEight = this.PrintEight.bind(this)
    this.PrintSeven = this.PrintSeven.bind(this)
    this.PrintSix = this.PrintSix.bind(this)
    this.PrintFive = this.PrintFive.bind(this)
    this.PrintFour = this.PrintFour.bind(this)
    this.PrintThree = this.PrintThree.bind(this)
    this.PrintTwo = this.PrintTwo.bind(this)
    this.PrintOne = this.PrintOne.bind(this)
    this.PrintZero = this.PrintZero.bind(this)
    this.TakeValue = this.TakeValue.bind(this)


  }

  PrintOne(){
    this.setState(
      {
      value : this.state.value + '1'
      }
    );
  }

  PrintTwo(){
    this.setState(
      {
      value : this.state.value + '2'
      }
    );
  }

  PrintThree(){
    this.setState(
      {
      value : this.state.value + '3'
      }
    );
  }

  PrintFour(){
    this.setState(
      {
      value : this.state.value + '4'
      }
    );
  }

  PrintFive(){
    this.setState(
      {
      value : this.state.value + '5'
      }
    );
  }

  PrintSix(){
    this.setState(
      {
      value : this.state.value + '6'
      }
    );
  }

  PrintSeven(){
    this.setState(
      {
      value : this.state.value + '7'
      }
    );
  }
  PrintEight(){
    this.setState(
      {
      value : this.state.value + '8'
      }
    );
  }

  PrintNine(){
    this.setState(
      {
      value : this.state.value + '9'
      }
    );
  }
 
  PrintZero(){
    this.setState(
      {
      value : this.state.value + '0'
      }
    );
  }
  
  TakeValue(event){
    let value = parseInt(event.target.value);
    if (value) {

      this.setState({
        value : value
      });
    } else {
      this.setState({
        value : 0
      });
    }
  }

  numberPad(value){
    this.setState({
      value:this.state.value + value
    });
  }




  render(){
    return(
  <div className="main">
     <input  className="field"  type="text" onChange={this.TakeValue} value={this.state.value}/>
      <div className="calci">
      <button className="button1" onClick={this.PrintSeven}>7</button>
      <button className="button1" onClick={this.PrintEight}>8</button>
      <button className="button1" onClick={this.PrintNine}>9</button><br/>
      <button className="button1" onClick={this.PrintFour}>4</button>
      <button className="button1" onClick={this.PrintFive}>5</button>
      <button className="button1" onClick={this.PrintSix}>6</button><br/>
      <button className="button1" onClick={this.PrintThree}>3</button>
      <button className="button1" onClick={this.PrintTwo}>2</button>
      <button className="button1" onClick={this.PrintOne}>1</button><br/>
      <button className="button1">+</button>
      <button className="button1" onClick={this.PrintZero}>0</button>
      <button className="button1">-</button>
    </div>
  </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Calculator value=""/>
      </div>
     
    );
  }
}

export default App;
