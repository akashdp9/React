import React, { Component } from 'react';
import './App.css';

class Box extends Component {
  constructor(props) {
    super(props);
    
    this.state =
      {
        count :1,
        color: '#ccc',
        disabled: false
        
      
      };
    
  }
  checkAnswer(useranswer){
    if(this.props.answer == useranswer){
        this.setState(
          {
            color:"#ccc",
            disabled: true
          }
        );
    }
    else {
      if(this.props.answer !== useranswer && useranswer!=''){
        this.props.wrongcount();
      if(this.state.count == 1)
      {
        this.setState(
          {
            color:'green',
            count:2
          }
        )

      }

      if(this.state.count == 2)
      {
        this.setState(
          {
            color:'yellow',
            count:3
          }
        )

      }

      if(this.state.count == 3)
      {
        this.setState(
          {
            color:'red',
            count:4,
            disabled :true
          }
        )

      }
   
    }
    
  }

  }




 render(){
      return (
        <div className='grid-box'>
          {this.props.number ? (
            <div className='Box' > {this.props.number}</div>
          ) : (

                  <input type='text' className="text_input" value={this.state.value} style={{backgroundColor:this.state.color}} 
                  onChange={(event)=> this.checkAnswer(event.target.value)}  disabled={(this.state.disabled)? 'disabled':''} maxLength={1} />
                )
          }
        </div>
      )


    }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      incorretattempts:0
    }
    this.increment = this.increment.bind(this)
  }

  increment(){
    this.setState({
      incorretattempts:this.state.incorretattempts + 1
    })
  }

  render() {
    return (
      <div className="App">
        <div className="line">
          <div className="Box1-row">

            <Box number={3} />
            <Box answer={1} wrongcount = {this.increment} />
            <Box answer={4}  wrongcount = {this.increment}/>
            <Box number={2} />
          </div>
        </div>
        <div className="line">
          <div className="Box1-row">
            <Box answer={2}  wrongcount = {this.increment} />
            <Box number={4} />
            <Box number={1} />
            <Box answer={3}  wrongcount = {this.increment}/>

          </div>
        </div>
        <div className="line">
          <div className="Box1-row">
            <Box answer={1}  wrongcount = {this.increment} />
            <Box number={3} />
            <Box number={2} />
            <Box answer={4}  wrongcount = {this.increment}/>

          </div>
        </div>
        <div className="line">
          <div className="Box1-row">
            <Box number={4} />
            <Box answer={2}  wrongcount = {this.increment}/>
            <Box answer={3}  wrongcount = {this.increment}/>
            <Box number={1} />
          </div>
        </div>
            <h1>total wrong attempts:{this.state.incorretattempts}</h1>
      </div>

    );
  }
}

export default App;


